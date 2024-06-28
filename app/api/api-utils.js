import { endpoints } from "./config";

export const getData = async(url) => {
    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getMe = async(jwt, isTeacher) => {
    let response;
    if (isTeacher) {
        response = await fetch(endpoints.getTeacherInfo, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            }
        })
    } else {
        //for students
    }

    if (response.status === 200) {
        const data = await response.json();
    } else {
        return null;
    }
}