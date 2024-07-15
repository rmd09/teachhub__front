"use client"

import { Overlay } from "../components/Overlay/Overlay";
import { Popup } from "../components/Popup/Popup";
import Styles from "./page.module.css";
import { useStore } from "../Store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Timetable() {
    const isAuth = useStore((state) => state.isAuth);
    const router = useRouter();

    useEffect(() => {
        if (!isAuth) {
            router.push("/");
        }
    }, [isAuth])

    return (
        <h1>Timetable</h1>
    )
}