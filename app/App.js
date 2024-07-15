"use client";

import { useEffect } from "react"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { useStore } from "./Store";

export const App = (props) => {
    const checkAuth = useStore((state) => state.checkAuth);
    const login = useStore((state) => state.login);
    useEffect(() => {
        checkAuth();
        //login("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdiZmQ3MWVlNTZhMGU5NWU2ZTVjNjkiLCJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE3MjA2ODIzMDAsImV4cCI6MTcyMDY5NjcwMH0.QYK4ENwgiCpE7snlIR6Zd2AqtMsMXGveG8gbEkg7if2bZqvd4M0UlJbupeduIu1DPST-4OP8JpbnLDBmjItzfbm-oiaeis74a1PIIdba3_aajvbN3Hw3Qh4CoGF0L407EdG5E0CSugHzTz1tz98GDUkumDJVeHEVNQ6evOwtFzq-D1P98mw9lMP_Xm7QWz8tjjUtc3idv78i3hDHnfBzdIHnd6ixcMYz71JvEev5mz3Gl7hSEe7tUBJ51KMK7YOQS_wkMoq14geAdWbJ7cRwyyo7BirEIIRe1H2lIhJoD-MEzn8Fr1zlw7fnnY3Sq2_d4MH_2xI6KrEs5JQtJGTpPQ", null, true);
    }, [])

    return (
        <>
        <Header />
        {props.children}
        <Footer />
        </>
    )
}