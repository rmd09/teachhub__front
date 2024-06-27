"use client";

import { useState } from "react";
import Styles from "./AuthForm.module.css";

export const AuthForm = (props) => {
    const [isFirstForm, setIsFirstForm] = useState(true);
    const [isForTeacher, setIsForTeacher] = useState(true);
    const [isAuth, setIsAuth] = useState(props.isAuth);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);

    const teacherHandler = () => {
        setIsForTeacher(true);
        setIsFirstForm(false);
    }
    const studentHandler = () => {
        setIsForTeacher(false);
        setIsFirstForm(false);
    }


    return (
        <>
        {/* Форма №1: Учитель/ученик */}
        {isFirstForm && (
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
        )}
        
        
        {/* Форма №2: Регистрация/Авторизация */}
        {!isFirstForm && (
            <form action="" className={Styles["form"]}>
                <header className={Styles["header"]}>
                    <h1 className={Styles["h1"]}>{isAuth ? "Авторизация" : "Регистрация"}</h1>
                    <h2 className={Styles["h2"]}>{isForTeacher ? "для учителя" : "для ученика"}</h2>
                </header>
                <section className={Styles["inputs"]}>
                    <div className={`${Styles["input__container"]} ${isFocus1 && Styles["input__container-focus"]}`}><input onFocus={() => {setIsFocus1(true)}} onBlur={() => {setIsFocus1(false)}} placeholder="Имя пользователя" type="text" className={`${Styles["input"]} ${Styles["input1"]}`} /></div>
                    <div className={`${Styles["input__container"]} ${isFocus2 && Styles["input__container-focus"]}`}><input onFocus={() => {setIsFocus2(true)}} onBlur={() => {setIsFocus2(false)}} placeholder="Пароль" type="password" className={`${Styles["input"]} ${Styles["input2"]}`} /></div>
                </section>
                <section className={Styles["buttons"]}>
                    <button type="submit" className={Styles["main__button"]}>{isAuth ? "Войти" : "Зарегистрироваться"}</button>
                    <button type="button" className={Styles["gray__button"]}>{isAuth ? "Зарегистрироваться" : "Войти"}</button>
                </section>
                <h3 className={Styles["h3"]}>{isForTeacher ? "Вы ученик?" : "Вы учитель?"} <span className={Styles["click__link"]}>Кликайте!</span></h3>
            </form>
        )}
        
        
        
        </>
    )
}