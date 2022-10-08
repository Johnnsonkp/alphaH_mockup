import bag from "../../assets/bag__white.svg";
import bagDark from "../../assets/bag__dark.svg";
import search from "../../assets/search__dark.svg";
import user from "../../assets/user___dark.svg";

export const Bag = () => {
  return (
    <div>
      <img src={bag} alt="bag-icon" />
    </div>
  );
};

export const BagDark = () => {
  return (
    <div className="header-quick-links">
      <img src={bagDark} alt="bag-icon-dark" />
    </div>
  );
};

export const UserDark = () => {
  return (
    <div className="header-quick-links hide-mobile">
      <img src={user} alt="user-icon" />
    </div>
  );
};

export const SearchDark = () => {
  return (
    <div className="header-quick-links hide-mobile">
      <img src={search} alt="search-icon" />
    </div>
  );
};
