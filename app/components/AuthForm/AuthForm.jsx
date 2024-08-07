"use client";

import { useState } from "react";
import Styles from "./AuthForm.module.css";
import { auth, registr } from "@/app/api/api-utils";
import { useStore } from "@/app/Store";
import { Checkbox } from "../Checkbox/Checkbox";

export const AuthForm = (props) => {
    const [isFirstForm, setIsFirstForm] = useState(true);
    const [isForTeacher, setIsForTeacher] = useState(true);
    const [isAuthForm, setIsAuthForm] = useState(props.isAuth);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [authData, setAuthData] = useState({ username: "", password: "" });
    const [needToRemember, setNeedToRemember] = useState(false);
    const [message, setMessage] = useState(null);
    
    const login = useStore((state) => state.login);

    const teacherHandler = () => {
        setIsForTeacher(true);
        setIsFirstForm(false);
    }
    const studentHandler = () => {
        setIsForTeacher(false);
        setIsFirstForm(false);
    }

    const usernameChangeHandler = (e) => {
        setAuthData({ ...authData, username: e.currentTarget.value });
    }
    const passwordChangeHandler = (e) => {
        setAuthData({ ...authData, password: e.currentTarget.value });
    }
    const checkBoxHandler = (e) => {
        setNeedToRemember(!needToRemember);
    }
    const showMessage = (text, close) => {
        setMessage(text);
        setTimeout(() => {
            setMessage(null);
            if (close) {
                close();
            }
        }, 1000)
    }

    const authSubmit = async() => {
        const reqBody = { ...authData, needToRemember: needToRemember};

        const response = await auth(isForTeacher, reqBody);
        if (response?.isAuth) {
            showMessage(response.message, props.close);
            login(response.data.jwt, response.data.user, isForTeacher);
        }
        else if (!response?.isAuth) {
            showMessage(response.message);
        }
        else {
            showMessage("Непридвиденная ошибка");
        }
    }
    const registrForm = async() => {
        const reqBody = { ...authData, needToRemember: needToRemember };

        const response = await registr(isForTeacher, reqBody);
        if (response?.isAuth) {
            showMessage(response.message, props.close);
            login(response.data.jwt, response.data.user, isForTeacher);
        }
        else if (!response?.isAuth) {
            showMessage(response.message);
        }
        else {
            showMessage("Непридвиденная ошибка");
        }
    }


    return (
        <>
        {/* Форма №1: Учитель/ученик */}
        {isFirstForm && (
            <>
            <h1 className={`${Styles["h1"]} ${Styles["header__title"]}`}>{isAuthForm ? "Авторизация" : "Регистрация"}</h1>
            <main className={Styles["first__main"]}>
                <section onClick={teacherHandler} className={Styles["iamteacher"]}>
                    <img src="/img/teacher.gif" alt="teacher" className={Styles["iamteacher__gif"]} />
                    <h3 className={Styles["first__text"]}>Я учитель</h3>
                </section>
                <section onClick={studentHandler} className={Styles["iamteacher"]}>
                    <img src="/img/student.gif" alt="student" className={Styles["iamstudent__gif"]} />
                    <h3 className={Styles["first__text"]}>Я ученик</h3>
                </section>
            </main>
            </>
        )}
        
        
        {/* Форма №2: Регистрация/Авторизация */}
        {!isFirstForm && (
            <form action={isAuthForm ? authSubmit : registrForm} className={Styles["form"]}>
                <header className={Styles["header"]}>
                    <h1 className={Styles["h1"]}>{isAuthForm ? "Авторизация" : "Регистрация"}</h1>
                    <h2 className={Styles["h2"]}>{isForTeacher ? "для учителя" : "для ученика"}</h2>
                </header>
                <section className={Styles["inputs"]}>
                    <div className={`${Styles["input__container"]} ${isFocus1 && Styles["input__container-focus"]}`}><input onChange={usernameChangeHandler} onFocus={() => {setIsFocus1(true)}} onBlur={() => {setIsFocus1(false)}} placeholder="Имя пользователя" type="text" className={`${Styles["input"]} ${Styles["input1"]}`} /></div>
                    <div className={`${Styles["input__container"]} ${isFocus2 && Styles["input__container-focus"]}`}><input onChange={passwordChangeHandler} onFocus={() => {setIsFocus2(true)}} onBlur={() => {setIsFocus2(false)}} placeholder="Пароль" type="password" className={`${Styles["input"]} ${Styles["input2"]}`} /></div>
                </section>
                {message && <h3 className={Styles["h3"]}>{message}</h3>}
                <section className={Styles["buttons"]}>
                    <button type="submit" className={Styles["main__button"]}>{isAuthForm ? "Войти" : "Зарегистрироваться"}</button>
                    <button onClick={() => {setIsAuthForm(!isAuthForm)}} type="button" className={Styles["gray__button"]}>{isAuthForm ? "Зарегистрироваться" : "Войти"}</button>
                </section>
                <section className={Styles["needToRemember__section"]}>
                    {/* <input onClick={checkBoxHandler} type="checkbox" className={Styles["checkBox"]} /> */}
                    <Checkbox click={checkBoxHandler}/>
                    <h3 className={Styles["h3"]}>Запомнить меня</h3>
                </section>
                <h3 className={`${Styles["h3"]} ${Styles["last__section"]}`}>{isForTeacher ? "Вы ученик?" : "Вы учитель?"} <span onClick={() => {setIsForTeacher(!isForTeacher)}} className={Styles["click__link"]}>Кликайте!</span></h3>
            </form>
        )}
        
        
        
        </>
    )
}