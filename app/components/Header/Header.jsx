"use client";

import Link from "next/link";
import Styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { useState } from "react";

export const Header = () => {
    const path = usePathname();

    const [hasPopupOpened, setHasPopupOpened] = useState(false);
    const [isAuth, setIsAuth] = useState(true);

    const openPopup = () => {
        setHasPopupOpened(true);
    }
    const closePopup = () => {
        setHasPopupOpened(false);
    }

    const registr = () => {
        setIsAuth(false);
        openPopup();
    }
    const auth = () => {
        setIsAuth(true);
        openPopup();
    }

    return (
        <>
        <header className={Styles["header"]}>
            <nav className={Styles["nav"]}>
                <Link href="/students"><h3 className={`${Styles["nav__headers"]} ${path === "/students" ? Styles["active"] : Styles["nav__headers-before"]}`}>Ученики</h3></Link>
                <Link href="/timetable"><h3 className={`${Styles["nav__headers"]} ${path === "/timetable" ? Styles["active"] : Styles["nav__headers-before"]}`}>Расписание</h3></Link>
            </nav>
            {path === "/" ? (
                <object className={Styles["logo"]} type="image/svg+xml" data="/img/logo.svg">
                <img src="/img/logo.svg" alt="Фолбэк"/>
                </object>
            ) : (
                <Link href="/"className={`${Styles["logo"]} ${Styles["logo-ponter"]}`}></Link>
            )}
            
            <div className={Styles["auth"]}>
                <button onClick={auth} className={`${Styles["auth__button"]} ${Styles["login"]}`}>Войти</button>
                <button onClick={registr} className={`${Styles["auth__button"]} ${Styles["signup"]}`}>Зарегистрироваться</button>
            </div>
        </header>


        {/* Окно авторизации */}
        {hasPopupOpened && (
            <>
            <Overlay close={closePopup} />
            <Popup close={closePopup}>
                <AuthForm isAuth={isAuth} />
            </Popup>
            </>
        )}

        </>
    );
};