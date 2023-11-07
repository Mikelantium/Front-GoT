import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../shared/MyContext";

export default function Header({ home }) {
  const { t, changeLanguage } = useContext(MyContext);

  return ( 
    <>
      <div className="header-icons">
        {home && (
          <NavLink to="/">
            <img className="img-icon" src="/home.png" alt="home" />
          </NavLink>
        )}
        <div>
          <img
            className="img-icon"
            src="/spain.png"
            alt="spain-icono"
            onClick={() => changeLanguage("es")}
          />
          <img
            className="img-icon"
            src="/kingdom.png"
            alt="kingdom-icono"
            onClick={() => changeLanguage("en")}
          />
        </div>
      </div>
    </>
  );
}
