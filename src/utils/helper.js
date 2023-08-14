/* get token */
export const getToken =() =>{
    return localStorage.getItem("token");
}

/* set token */
export const setToken = (token) => {
    return localStorage.setItem("token", token);
}

/* remove token */
export const removeToken = () => {
    return localStorage.removeItem("token");
};