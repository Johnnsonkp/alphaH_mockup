export const HeaderContent = () => {
  return (
    <div className="header-content">
      <div className="header-inner-content">
        <p className="dark on-sale">ON SALE NOW</p>
        <h1>
          The Super Serum,
          <span className="light"> for plump, youthful skin.</span>
        </h1>
        <p className="small-text light">
          Powered by Retinol, the gentle age-defying serum for everyone.
        </p>
        <button className="cta-btn">
          <a className="shop-now-cta" href="#">
            Shop Now
          </a>
        </button>
      </div>
    </div>
  );
};
