export const setJWT = (jwt) => {
    localStorage.setItem("jwt", jwt);
}
export const getJWT = () => {
    return localStorage.getItem("jwt");
}
export const removeJWT = () => {
    localStorage.removeItem("jwt");
}

export const setIsTeacher = (isTeacher) => {
    localStorage.setItem("isTeacher", jwt);
}
export const getIsTeacher = () => {
    return localStorage.getItem("isTeacher");
}
export const removeIsTeacher = () => {
    localStorage.removeItem("isTeacher");
}