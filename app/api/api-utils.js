"use client"

import { endpoints } from "./config";
import { useStore } from "../Store";


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
    const url = isTeacher ? endpoints.getTeacherInfo : endpoints.getStudentInfo;
    const response = await fetch(url, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        }
    })
    
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        return null;
    }
}

export const auth = async(isTeacher, reqBody) => {
    const url = isTeacher ? endpoints.teacherAuth : endpoints.studentAuth;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: reqBody
    });
    if (response.status === 200) {
        const data = await response.json();
        return { isAuth: true, message: data.message, data: data };
    } else if (response.status === 400) {
        const data = await response.json();
        return { isAuth: false, message: data.message };
    }
    else {
        return null;
    }
    return null;
}