import "./navbar.css";
import logo from "./asets/logo4.png";
/* js navbar */
/* const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});  */
/* fin js navbar */
export function Navbar() {
  return (
    <>
      <span className="cont-lu"></span>
      <div className="container topBotomBordersOut">
        <nav id="main-navbar ">
          <div class="logo">
            <img src={logo} alt="" id="id-imagen-logo" />
          </div>

          <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>

          <ul class="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
