import Styles from "./Notification.module.css";

export const Notification = (props) => {
    return (
        <main className={`${Styles["main"]} ${props.isOK ? Styles["main-OK"] : Styles["main-error"]}`}>
            <h1 className={Styles["h1"]}>{props.children}</h1>
        </main>
    )
}