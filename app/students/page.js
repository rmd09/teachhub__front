"use client";

import { useEffect, useState } from "react";
import { StudentCardList } from "../components/StudentCardList/StudentCardList";
import Styles from "./page.module.css";
import { Overlay } from "../components/Overlay/Overlay";
import { Popup } from "../components/Popup/Popup";
import { StudentInfo } from "../components/StudentInfo/StudentInfo";
import { useStore } from "../Store";
import { useRouter } from "next/navigation";

export default function Students() {
    const isAuth = useStore((state) => state.isAuth);
    const router = useRouter();

    useEffect(() => {
        if (!isAuth) {
            router.push("/");
        }
    }, [isAuth])

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