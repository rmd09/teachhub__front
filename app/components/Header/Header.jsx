"use client";

import Link from "next/link";
import Styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export const Header = () => {
    // const [pageId, setPageId] = useState("start-page"); //start-page; students-page; timetable-page
    const path = usePathname();

    return (
        <header className={Styles["header"]}>
            <nav className={Styles["nav"]}>
                <Link href="/students"><h3 className={`${Styles["nav__headers"]} ${path === "/students" ? Styles["active"] : Styles["nav__headers-before"]}`}>Участники</h3></Link>
                <Link href="/timetable"><h3 className={`${Styles["nav__headers"]} ${path === "/timetable" ? Styles["active"] : Styles["nav__headers-before"]}`}>Расписание</h3></Link>
            </nav>
            {path === "/" ? (
                <img src="/img/logo.svg" alt="logo" className={Styles["logo"]} />
            ) : (
                <Link href="/"><img src="/img/logo.svg" alt="logo" className={Styles["logo"]} /></Link>
            )}
            
            <div className={Styles["auth"]}>
                <button className={`${Styles["auth__button"]} ${Styles["login"]}`}>Войти</button>
                <button className={`${Styles["auth__button"]} ${Styles["signup"]}`}>Зарегистрироваться</button>
            </div>
        </header>
    );
};