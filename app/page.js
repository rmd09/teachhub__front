import Styles from "./page.module.css";
import { StudentCardList } from "./components/StudentCardList/StudentCardList"; 

export default function Home() {
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
  return (
    <main>
      <StudentCardList data={temp}/>
    </main>
  )
}
