import "./main.css";

/* swiper js header */
import SwiperHeader from "./SwiperHeader.jsx";
import "swiper/css/bundle";
import "./swiperheader.css";
/* fins swiper js header */

/* swiper js articulos nuevos  */
import ArticulosNuevos from "./ArticulosNuevos";
/* fin swiper js articulos nuevos  */

/* preguntas frecuentes */
import { Preguntas } from "./Preguntas";
/* fin preguntas frecuentes */

/* galeria */
import Galeria from "./Galeria";
/* fin galeria */

/* js menu secciones galeria */

const opciones = document.querySelectorAll(".opciones");
const opcAbstract = document.querySelector(".opc-abs");
const opcPix = document.querySelector(".opc-pix");
const seccionAbstract = document.querySelector(".seccion-arteAbstracto")
const seccionPixel = document.querySelector(".seccion-pixelArt")


opcPix.addEventListener("click",function () {
  seccionPixel.classList.add("show");
  seccionAbstract.classList.remove("show");
})

opcAbstract.addEventListener("click",function () {
  seccionAbstract.classList.add("show");
  seccionPixel.classList.remove("show");
}) 
 


/* fin js menu secciones galeria */
export function Main() {
  return (
    <main>
      <header>
        <SwiperHeader />
      </header>
      <main className="contenedorP">
        <section className="swiperArticulosNuevos ">
          <div className="textoArticulosNuevos">
            <h2 className="subtitulo">
              New unique design and exclusive collection
            </h2>
          </div>
          <ArticulosNuevos />
        </section>
        <div className="secciones-galeria" id="menu-galeria">
          <ul className="opciones-galeria">
            <li className="opciones opc-abstract"><a href="#menu-galeria" className="subtitulo opc-abs">Abstract art</a> </li>
            <li className="opciones opc-pixel"><a href="#menu-galeria" className="subtitulo opc-pix">Pixel Art</a> </li>
          </ul>
        </div>
        <sectiom className="contenedor-galeria">
          {/* <h1 className="subtitulo">Art gallery</h1> */}
          <section className="seccion-arteAbstracto ">
          <Galeria />
          </section>
          <section className="seccion-pixelArt">
            <h1>ejemplo</h1>
          </section>
        </sectiom>
        <section className="preguntas-frecuentes">
          <Preguntas />
        </section>
      </main>
    </main>
  );
}
