import Styles from "./StudentCardList.module.css";
import { StudentCard } from "./StudentCard";

export const StudentCardList = (props) => {
    return (
        <main className={Styles["main"]}>
            <h1 className={Styles["title"]}>Список учеников:</h1>

            <div className={Styles["card__list"]}></div>
            {
                props.data.map((student) => {
                    return <StudentCard {...student}/>
                })
            }
        </main>
    )
}