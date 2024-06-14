import Styles from "./page.module.css";
import { StudentCard } from "./components/StudentCardList/StudentCard"; 

export default function Home() {
  return (
    <main>
      <StudentCard 
      name="Максим" subject="Английский" homework="Домашка...вммвымв.мвывымв" timeNotification="Сегодня"
      />
    </main>
  )
}
