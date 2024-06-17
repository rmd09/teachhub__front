"use client";

import Link from "next/link";
import Styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export const Header = () => {
    const path = usePathname();

    return (
        <header className={Styles["header"]}>
            <nav className={Styles["nav"]}>
                <Link href="/students"><h3 className={`${Styles["nav__headers"]} ${path === "/students" ? Styles["active"] : Styles["nav__headers-before"]}`}>Участники</h3></Link>
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
                <button className={`${Styles["auth__button"]} ${Styles["login"]}`}>Войти</button>
                <button className={`${Styles["auth__button"]} ${Styles["signup"]}`}>Зарегистрироваться</button>
            </div>
        </header>
    );
};