"use client";

import { useState } from "react";
import { StudentCardList } from "../components/StudentCardList/StudentCardList";
import Styles from "./page.module.css";
import { Overlay } from "../components/Overlay/Overlay";
import { Popup } from "../components/Popup/Popup";
import { StudentInfo } from "../components/StudentInfo/StudentInfo";

export default function Students() {

    return (
        <StudentCardList data={temp}/>
    )
}



const temp = [
    {
        name: "Максим",
        subject: "Английский",
        homework: "Домашка для Максима",
        timeNotification: "Сегодня"
    },
    {
        name: "Алексей",
        subject: "Английский",
        homework: "Домашка для Максима",
        timeNotification: "Сегодня"
    },
    {
        name: "Алексей",
        subject: "Английский",
        homework: "Домашка для Максима",
        timeNotification: "Сегодня"
    }
    ]