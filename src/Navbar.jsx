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

/* js ocultar/mostrar navbar al hacer scroll*/
/* let ubucacionPrincipal = window.pageYOffset
let nav = document.querySelector(".navbar1")
console.log(nav);
window.addEventListener("scroll",function () {
  let ubucacionActual = window.pageYOffset
  
  if (ubucacionPrincipal>=ubucacionActual) {
    
    nav.style.top = "0px"
  }else{
    nav.style.top = "-100px"
    
  }
  ubucacionPrincipal=ubucacionActual
}) */
/* fin js ocultar/mostrar navbar al hacer scroll*/
export function Navbar() {
  return (
    <>
      <span className="cont-lu"></span>
      <div className="container topBotomBordersOut">
        <nav id="main-navbar " className="navbar1">
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
