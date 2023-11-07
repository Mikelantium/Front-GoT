import Header from "../../components/basic/Header";
import Footer from "../../components/basic/Footer";
import { MyContext } from "../../shared/MyContext";
import { useContext } from "react";

export default function HomePage() {
  const { t, changeLanguage } = useContext(MyContext);
  return (
    <div className="backgroundImg">
      <header className="header">
        <div></div>
        <Header home={false} />
      </header>
      <main className="main main-home">
        <h1 className="e-h1 alignCenter">{t("home")}</h1>
      </main>
      <footer className="footer margin-top margin-bottom">
        <Footer />
      </footer>
    </div>
  );
}
