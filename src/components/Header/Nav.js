import { Bag } from "./Bag";
import { BagDark } from "./Bag";
import { HeaderLogoDarkLight } from "./HeaderLogo";
import Menu from "./Menu";
import { MenuDesktop } from "./MenuDesktop";
import { SearchDark } from "./Bag";
import { UserDark } from "./Bag";
import headerLogoBlack from "../../assets/logo__black.svg";
import headerLogoWhite from "../../assets/logo__white.svg";

export default function NavSection() {
  return (
    <div id="nav-section">
      <div className="nav-container">
        <div className="hamburger-menu-container">
          <Menu />
        </div>
        <HeaderLogoDarkLight
          headerLogoBlack={headerLogoBlack}
          headerLogoWhite={headerLogoWhite}
        />

        <div className="nav-right">
          <MenuDesktop />
          <button className="shopping-bag mobile">
            <Bag />
          </button>
          <button className="shopping-bag desktop">
            <UserDark />
            <BagDark />
            <SearchDark />
          </button>
        </div>
      </div>
    </div>
  );
}
