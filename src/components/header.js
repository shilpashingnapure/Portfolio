import img from "../img/kem-hero.png";
function Header() {
  return (
    <div class="header">
      <div class="header--div1">
        <p class="header-hi">Hi there </p>
        <h1 class="header--name">Shilpa Shingnapure</h1>
        <h3 class="header--work">FULL STACK WEB DEVELOPER </h3>
        <p>
          I’m a professional UI/UX designer with front end <br />
          development skills based in Lagos.
        </p>
        <button class="btn">Contact me</button>
      </div>
      <div class="avtar_img">
        <img src={img} />
      </div>
    </div>
  );
}

export default Header;