import Styles from "./Popup.module.css";

export const Popup = (props) => {
    return (
        <div className={Styles["popup"]}>
            <svg onClick={props.close} className={Styles["cross"]} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        
            <section className={Styles["main"]}>
                {props.children}
            </section>
        </div>
    )
}