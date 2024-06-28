import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { App } from "./App";

export const metadata = {
  title: "Репетитория",
  description: "Сайт ассистент репетитора",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
