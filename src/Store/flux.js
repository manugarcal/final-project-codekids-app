const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: null,

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
    },
  };
};

export default getState;
