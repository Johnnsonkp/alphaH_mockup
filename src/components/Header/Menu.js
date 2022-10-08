import React, { useState } from "react";

import MenuDropDown from "./MenuDropDown";
import crossDark from "../../assets/cancel_menu-black.svg";
import hamburger from "../../assets/menu-toggle.svg";

export default function Menu(props) {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="nav-wrapper">
      <img
        onClick={() => setMenuToggle(!menuToggle)}
        src={menuToggle ? crossDark : hamburger}
        className={`${menuToggle ? "svg-logo-black" : "svg-logo"}`}
        alt="menu-toggle"
      />
      {menuToggle ? (
        <MenuDropDown
          menuToggle={menuToggle}
          menuItem1={"SHOP"}
          menuItem2={"KITS & DUOS"}
          menuItem3={"BUILD YOUR ROUTINE"}
          menuItem4={"SKIN QUIZ"}
          menuItem5={"BOOK A CONSULT"}
          menuItem6={"OUR VALUES"}
          menuItem7={"THE JOURNAL"}
        />
      ) : null}
    </div>
  );
}
