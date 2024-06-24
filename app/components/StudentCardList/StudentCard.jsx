"use client";

import { useState } from "react";
import Styles from "./StudentCard.module.css";

export const StudentCard = (props) => {
    return (
        <section onClick={props.openPopup} className={Styles["student__card"]}>
            <section className={Styles["name"]}>
                <h3 className={Styles["student__card-title"]}>Имя</h3>
                <h1 className={Styles["name__value"]}>{props.name}</h1>
            </section>
            <section className={Styles["subject"]}>
                <h3 className={Styles["student__card-title"]}>Предмет</h3>
                <h1 className={Styles["subject__value"]}>{props.subject}</h1>
                <svg className={Styles["border"]} width="1" height="192" viewBox="0 0 1 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="2.18557e-08" x2="0.499992" y2="192" stroke="#3B404D" stroke-dasharray="4 4"/>
                </svg>
            </section>
            <section className={Styles["homework"]}>
                <h3 className={Styles["student__card-title"]}>Домашнее задание</h3>
                <p className={Styles["homework__value"]}>
                {props.homework}
                </p>
                <svg className={Styles["border"]} width="1" height="192" viewBox="0 0 1 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="2.18557e-08" x2="0.499992" y2="192" stroke="#3B404D" stroke-dasharray="4 4"/>
                </svg>
            </section>
            <section className={Styles["meeting"]}>
                <h3 className={Styles["student__card-title"]}>Вебинар</h3>
                <img src="/img/meeting-ico.png" alt="meeting image" className={Styles["meeting__image"]} />
                <h4 className={Styles["meeting__notification"]}>{props.timeNotification}</h4>
            </section>
        </section>
    )
}