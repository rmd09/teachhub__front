"use client";

import Link from "next/link";
import Styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { useEffect, useState } from "react";
import { getData } from "@/app/api/api-utils";
import { endpoints } from "@/app/api/config";
import { useStore } from "@/app/Store";

export const Header = () => {
    const path = usePathname();

    const [hasPopupOpened, setHasPopupOpened] = useState(false);
    const [isAuthForm, setIsAuthForm] = useState(true);
    
    const isAuth = useStore((state) => state.isAuth);
    const logout = useStore((state) => state.logout);

    const openPopup = () => {
        setHasPopupOpened(true);
    }
    const closePopup = () => {
        setHasPopupOpened(false);
    }

    const registr = () => {
        setIsAuthForm(false);
        openPopup();
    }
    const auth = () => {
        setIsAuthForm(true);
        openPopup();
    }

    return (
        <>
        <header className={Styles["header"]}>
            {
                isAuth ? (
                    <nav className={Styles["nav"]}>
                        <Link href="/students"><h3 className={`${Styles["nav__headers"]} ${path === "/students" ? Styles["active"] : Styles["nav__headers-before"]}`}>Ученики</h3></Link>
                        <Link href="/timetable"><h3 className={`${Styles["nav__headers"]} ${path === "/timetable" ? Styles["active"] : Styles["nav__headers-before"]}`}>Расписание</h3></Link>
                    </nav>
                ) : (
                    <nav className={Styles["nav"]}>
                        <div onClick={auth}><h3 className={`${Styles["nav__headers"]} ${path === "/students" ? Styles["active"] : Styles["nav__headers-before"]}`}>Ученики</h3></div>
                        <div onClick={auth}><h3 className={`${Styles["nav__headers"]} ${path === "/timetable" ? Styles["active"] : Styles["nav__headers-before"]}`}>Расписание</h3></div>
                    </nav>
                )
            }
            
            
            {path === "/" ? (
                <object className={Styles["logo"]} type="image/svg+xml" data="/img/logo.svg">
                <img src="/img/logo.svg" alt="Фолбэк"/>
                </object>
            ) : (
                <Link href="/"className={`${Styles["logo"]} ${Styles["logo-ponter"]}`}></Link>
            )}
            
            <div className={Styles["auth"]}>
                <button onClick={isAuth ? ()=>{} : auth} className={`${Styles["auth__button"]} ${Styles["login"]}`}>{isAuth ? "Профиль" : "Войти"}</button>
                <button onClick={isAuth ? logout : registr} className={`${Styles["auth__button"]} ${Styles["signup"]}`}>{isAuth ? "Выйти" : "Зарегистрироваться"}</button>
            </div>
        </header>


        {/* Окно авторизации */}
        {hasPopupOpened && (
            <>
            <Overlay close={closePopup} />
            <Popup close={closePopup}>
                <AuthForm isAuth={isAuthForm} close={closePopup} />
            </Popup>
            </>
        )}

        </>
    );
};