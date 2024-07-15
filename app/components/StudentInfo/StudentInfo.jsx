import { Checkbox } from "../Checkbox/Checkbox";
import Styles from "./StudentInfo.module.css";

export const StudentInfo = (props) => {
    return (
        <form action="" className={Styles["form"]}>
            <h1 className={`${Styles["h1"]}`}>Общее</h1>
            <section className={`${Styles["name__and__subject"]}`}>
                <div className={`${Styles["name"]}`}>
                    <h3 className={`${Styles["h3"]}`}>Имя:</h3>
                    <input type="text" className={`${Styles["name__and__subject-value"]}`} />
                </div>
                <div className={`${Styles["subject"]}`}>
                    <h3 className={`${Styles["h3"]}`}>Предмет:</h3>
                    <input type="text" className={`${Styles["name__and__subject-value"]}`} />
                </div>
            </section>

            <h1 className={`${Styles["h1"]}`}>Заметки</h1>
            <section className={Styles["notes"]}>
                <div contentEditable type="text" className={`${Styles["notes__value"]}`}></div>
                <div className={Styles["notes__checkbox"]}>
                    {/* <input type="checkbox" className={`${Styles["notes__checkbox-input"]}`}/> */}
                    <Checkbox />
                    <h4 className={Styles["h4"]}>Сделать заметки публичными</h4>
                </div>
            </section>

            <section className={`${Styles["links__and__timetable"]}`}>
                <section className={`${Styles["links"]}`}>
                    <div className={`${Styles["links__header"]}`}>
                        <h1 className={`${Styles["h1"]}`}>Полезные ссылки</h1>
                        <svg className={`${Styles["plus-svg"]}`} width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z" fill="#0F0F0F"/>
                        </svg>
                    </div>
                    <div className={`${Styles["links__container"]}`}>
                        <button type="button" className={`${Styles["links__link"]}`}>Учебник</button>
                        <button type="button" className={`${Styles["links__link"]}`}>Сборник упражнений</button>
                        <button type="button" className={`${Styles["links__link"]}`}>Учебник</button>
                        <button type="button" className={`${Styles["links__link"]}`}>Сборник упражнений</button>
                        <button type="button" className={`${Styles["links__link"]}`}>Учебник</button>
                        <button type="button" className={`${Styles["links__link"]}`}>Сборник упражнений</button>
                    </div>
                </section>
                <section className={`${Styles["timetable"]}`}>
                    <div className={`${Styles["timetable__header"]}`}>
                        <h1 className={`${Styles["h1"]}`}>Расписание</h1>
                        <svg className={`${Styles["plus-svg"]}`} width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z" fill="#0F0F0F"/>
                        </svg>
                    </div>
                    <div className={`${Styles["timetable__container"]}`}>
                        <div className={`${Styles["timetable__item"]}`}>
                            <h4 className={`${Styles["h4"]}`}>Понедельник - 17:00</h4>
                            <img src="/img/pencil.svg" alt="pencil" className={Styles["delete__and__pencil__svg"]} />
                            <img src="/img/delete.svg" alt="delete" className={Styles["delete__and__pencil__svg"]} />
                        </div>
                        <div className={`${Styles["timetable__item"]}`}>
                            <h4 className={`${Styles["h4"]}`}>Понедельник - 17:00</h4>
                            <img src="/img/pencil.svg" alt="pencil" className={Styles["delete__and__pencil__svg"]} />
                            <img src="/img/delete.svg" alt="delete" className={Styles["delete__and__pencil__svg"]} />
                        </div>
                        <div className={`${Styles["timetable__item"]}`}>
                            <h4 className={`${Styles["h4"]}`}>Понедельник - 17:00</h4>
                            <img src="/img/pencil.svg" alt="pencil" className={Styles["delete__and__pencil__svg"]} />
                            <img src="/img/delete.svg" alt="delete" className={Styles["delete__and__pencil__svg"]} />
                        </div>
                    </div>
                </section>
            </section>
            <section className={Styles["form__buttons"]}>
                <button type="submit" className={`${Styles["button"]} ${Styles["save"]}`}>Сохранить</button>
                <button type="button" className={`${Styles["button"]} ${Styles["delete"]}`}>Удалить</button>
            </section>
        </form>
    )
}