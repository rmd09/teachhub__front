import Styles from "./Overlay.module.css";

export const Overlay = (props) => {
    return (
        <div onClick={props.close} className={Styles["overlay"]}></div>
    )
}