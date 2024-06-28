"use client";

import { useEffect } from "react"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { useStore } from "./Store";

export const App = (props) => {
    const checkAuth = useStore((state) => state.checkAuth);
    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <>
        <Header />
        {props.children}
        <Footer />
        </>
    )
}