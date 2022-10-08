export const HeaderLogoDarkLight = (props) => {
  return (
    <div className="header__logo">
      <a href="/" className="dark">
        <img src={props.headerLogoBlack} alt="header-logo-dark" />
      </a>
      <a href="/" className="light">
        <img src={props.headerLogoWhite} alt="header-logo-light" />
      </a>
    </div>
  );
};
