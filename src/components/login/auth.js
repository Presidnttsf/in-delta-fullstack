export const isAuthenticated = () => {
    const token = localStorage.getItem("user")
    // console.log("token", token)

    return !!token;
}


