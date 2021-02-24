import { data } from "jquery";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
        baseURL: "http://localhost:5000",
        currentUser: null,
        isLogged: false,
        errors: null,
        username: '',
        password: '',
        avatar: ''
    },
    actions: 
    {
        newsletterPost: (email) => {
            let data = {
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
        handleChange: e => {
            setStore({
                [e.target.name]: e.target.value
            })
        },
        handleChangeFile: e => {
            setStore({
                [e.target.name]: e.target.value
            })
        },
        handleSubmit: (e, history) =>{
            e.preventDefault()
            const store = getStore()
            const {username, password, currentUser} = store
            const data ={
                "username": username,
                "password": password
            }
            getActions().login('/api/login', data)
            if(currentUser != null){
                history.push('/Dashboard')
            }
        },
        login: async (url, data) => {
            const store = getStore()
            const {baseURL} = store
            const resp = await fetch(baseURL+url, {
               method: 'POST',
               body: JSON.stringify(data),
               headers: {
                   'Content-Type': 'application/json'
               }
            })
            const info = await resp.json()
            console.log(info);
            if (info.msg){
                setStore({
                    errors: info
                })
            }else{
                setStore({
                    currentUser: info,
                    isLogged: true,
                    errors: null,
                    username: '',
                    password: '',
                })
            }
        }
        
    }
  };
};

export default getState;
