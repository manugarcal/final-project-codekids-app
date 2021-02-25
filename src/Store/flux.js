import { data } from "jquery";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      baseURL: "http://localhost:5000",
      currentUser: null,
      isLogged: false,
      errors: null,
      username: "",
      password: "",
      avatar: "",
      email: "",
      nombre_planeta: [],
      misiones: {
        instrucciones: "",
        codigo: "",
        soluciones: ""
      },
      miss: []

      
    },
    actions: {
      planets: () => {
        fetch("http://localhost:5000/api/planetas")
					.then(resp => resp.json())
					.then(data => {
            setStore({
              nombre_planeta: data
            })
          })
					.catch(error => console.log(error));
      },
      mision: () => {
        fetch("http://localhost:5000/api/planeta/1/mision")
					.then(resp => resp.json())
					.then(data => {
            setStore({
              miss: data
            })
          })
					.catch(error => console.log(error));
      },
      isLogged: () => {
        if (sessionStorage.getItem("currentUser")) {
          let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
          let isLogged = sessionStorage.getItem("isLogged");

          setStore({
            currentUser: currentUser,
            isLogged: isLogged,
          });
        }
      },

      handleSubmitNews: (e) => {
        e.preventDefault();
        const store = getStore();
        const {email} = store;
        const data = {
            email: email
        }
        fetch("http://localhost:5000/api/news", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    },
      handleChange: (e) => {
        setStore({
          [e.target.name]: e.target.value,
        });
      },
      handleChangeFile: (e) => {
        setStore({
          [e.target.name]: e.target.files[0],
        });
      },
      handleSubmitLogin: (e, history) => {
        e.preventDefault();
        const store = getStore();
        const { username, password } = store;
        const data = {
          username: username,
          password: password,
        };
        getActions().login("/api/login", data, history);
      },
      handleSubmitRegister: (e, history) => {
        e.preventDefault();
        const store = getStore();
        const { username, password, avatar } = store;
        let formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);
        if (avatar !== "") {
          formData.append("avatar", avatar);
        }
        getActions().register("/api/register", formData, history);
      },
      login: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const info = await resp.json();
        console.log(info);
        if (info.msg) {
          setStore({
            errors: info,
          });
        } else {
          setStore({
            currentUser: info,
            isLogged: true,
            errors: null,
            username: "",
            password: "",
            /* aqui agregar el type y condicionar el history a profe o usuario */
          });
          sessionStorage.setItem("currentUser", JSON.stringify(info));
          sessionStorage.setItem("isLogged", true);
          history.push("/Dashboard");
        }
      },
      register: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: data,
        });
        const info = await resp.json();
        console.log(info);
        if (info.msg) {
          setStore({
            errors: info,
          });
        } else {
          setStore({
            currentUser: info,
            isLogged: true,
            errors: null,
            username: "",
            password: "",
            avatar: "",
          });
          sessionStorage.setItem("currentUser", JSON.stringify(info));
          sessionStorage.setItem("isLogged", true);
          history.push("/Dashboard");
        }
      },
      logout: (e) => {
        sessionStorage.removeItem("currentUser");
        sessionStorage.removeItem("isLogged");
        setStore({
          currentUser: null,
          isLogged: false,
        });
      },
    },
  };
};

export default getState;
