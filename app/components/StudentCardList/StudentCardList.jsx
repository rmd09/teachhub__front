"use client";

import Styles from "./StudentCardList.module.css";
import { StudentCard } from "./StudentCard";
import { useState } from "react";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { StudentInfo } from "../StudentInfo/StudentInfo";

export const StudentCardList = (props) => {
    const [isStudentPopupOpened, setIsStudentPopupOpened] = useState(false);

    const openPopup = () => {
        setIsStudentPopupOpened(true);
    }

    const closePopup = () => {
        setIsStudentPopupOpened(false);
    }

    return (
        <>
        <main className={Styles["main"]}>
            <h1 className={Styles["title"]}>Список учеников:</h1>

            <div className={Styles["card__list"]}></div>
            {
                props.data?.map((student, key) => {
                    return <StudentCard {...student} openPopup={openPopup} key={key}/>
                })
            }
        </main>

        {isStudentPopupOpened && (
            <>
            <Overlay close={closePopup} />
            <Popup close={closePopup}>
                <StudentInfo />
            </Popup>
            </>
        )}
        </>
    )
}