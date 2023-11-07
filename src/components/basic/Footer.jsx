import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../shared/MyContext";

export default function Footer() {
  const { t, changeLanguage } = useContext(MyContext);
  return (
    <>
      <div className="footer-div">
        <NavLink
          to="/characters"
          className={({ isActive }) => (isActive ? "u-active" : "")}
        >
          <h2 className="e-h2">{t("character")}</h2>
        </NavLink>
        <NavLink
          to="/houses"
          className={({ isActive }) => (isActive ? "u-active" : "")}
        >
          <h2 className="e-h2">{t("houses")}</h2>
        </NavLink>

        <NavLink
          to="/chronology"
          className={({ isActive }) => (isActive ? "u-active" : "")}
        >
          <h2 className="e-h2">{t("chronology")}</h2>
        </NavLink>
      </div>
    </>
  );
}
