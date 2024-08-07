function Header() {
  return (
    <div className="header">
      <div className="header--div1">
        <p className="header-hi fadeLeft">Hi there </p>
        <h1 className="header--name fadeRight">Shilpa Shingnapure</h1>
        <h3 className="header--work fadeLeft">FULL STACK WEB DEVELOPER </h3>
        <p className="fadeRight">
          I’m a MERN stack developer with the
          <br />
          development skills based in Mumbai.
        </p>
        <div className="btns">
          <button className="btn fadeLeft">
            <a href="#contact" style={{ color: "#000" }}>
              Contact me
            </a>
          </button>
          <button className="portfolio-btn fadeLeft">
            <a
              href="https://shilpa-shingnapure-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Updated Portfolio
            </a>
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </button>
        </div>
      </div>
      <div className="avtar_img zoomIn">
        {/* <img src={img} alt="" /> */}
        <iframe
          height="300"
          // style="width: 100%;"
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/shilpashingnapure/embed/abEbROq?result"
          // src="https://cdpn.io/pen/debug/abEbROq?authentication_hash=yPkJjbdKGaEk"
          frameBorder="no"
          loading="lazy"
          data-default-tab="result"
          // allowtransparency="true"
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/shilpashingnapure/pen/abEbROq">
            Untitled
          </a>{" "}
          by Shilpa Shingnapure (
          <a href="https://codepen.io/shilpashingnapure">@shilpashingnapure</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
    </div>
  );
}

export default Header;
