import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes";
import { MyContext } from "./shared/MyContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation(["translation"]);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  useEffect(() =>{
  changeLanguage("es");
  }, [])

  return (
    <MyContext.Provider value={{ t, changeLanguage }}>
      <Router>
        <Routes />
      </Router>
    </MyContext.Provider>
  );
}

export default App;
