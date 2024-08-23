"use client";

import Styles from "./StudentCardList.module.css";
import { StudentCard } from "./StudentCard";
import { useState } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { StudentInfo } from "../StudentInfo/StudentInfo";

export const StudentCardList = (props) => {
    const [isStudentPopupOpened, setIsStudentPopupOpened] = useState(false);
    const [isPopupForChanging, setIsPopupForChanging] = useState(false);

    const openPopupForChanging = () => {
        setIsPopupForChanging(true);
        setIsStudentPopupOpened(true);
    }
    const openPopupForCreating = () => {
        setIsPopupForChanging(false);
        setIsStudentPopupOpened(true);
    }

    const closePopup = () => {
        setIsStudentPopupOpened(false);
    }

    return (
        <>
        <main className={Styles["main"]}>
            <section className={Styles["header"]}>
                <h1 className={Styles["title"]}>Список учеников:</h1>
                <div className={Styles["add__student__container"]}>
                    <h1 className={Styles["add__student"]}>Добавить ученика</h1>
                    <svg onClick={openPopupForCreating} className={`${Styles["plus-svg"]}`} width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z" fill="#0F0F0F"/>
                    </svg>
                </div>
            </section>

            <div className={Styles["card__list"]}></div>
            {
                props.data?.map((student, key) => {
                    return <StudentCard {...student} openPopup={openPopupForChanging} key={key}/>
                })
            }
        </main>

        {isStudentPopupOpened && (
            <>
            <Overlay close={closePopup} />
            <Popup close={closePopup}>
                <StudentInfo isForChanging={isPopupForChanging} />
            </Popup>
            </>
        )}
        </>
    )
}