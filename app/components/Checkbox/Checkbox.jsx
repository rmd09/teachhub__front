"use client"

import { useState } from "react";
import Styles from "./Checkbox.module.css";

export const Checkbox = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const clickHandler = () => {
        setIsChecked(!isChecked);
        if (props.click) {
            props.click();
        }
    }

    return (
        <main onClick={clickHandler} className={`${Styles["main"]} ${isChecked ? Styles["main-checked"] : Styles["main-unchecked"]}`}>
            
        </main>
    )
}