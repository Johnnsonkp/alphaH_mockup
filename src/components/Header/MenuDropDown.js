export default function MenuDropDown(props) {
  return (
    <nav className="nav left">
      <ul
        className={`inner-nav-links ${
          props.menuToggle ? "header__open-menu" : "header__close-menu"
        }`}
      >
        <li className="nav-link">
          <a href="#">{props.menuItem1}</a>
        </li>
        <li className="nav-link">
          <a href="#">{props.menuItem2}</a>
        </li>
        <li className="nav-link">
          <a href="#">{props.menuItem3}</a>
        </li>
        <li className="nav-link">
          <a href="#">{props.menuItem4}</a>
        </li>
        <li className="nav-link">
          <a href="#">{props.menuItem5}</a>
        </li>
        <li className="nav-link">
          <a href="#">{props.menuItem6}</a>
        </li>
        <li className="nav-link">
          <a href="#">{props.menuItem7}</a>
        </li>
      </ul>
    </nav>
  );
}
