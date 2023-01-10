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
        <div className="secciones-galeria">
          <ul className="opciones-galeria">
            <li className="opciones"><a href="#" className="subtitulo">Abstract art</a> </li>
            <li className="opciones"><a href="#" className="subtitulo">Pixel Art</a> </li>
          </ul>
        </div>
        <sectiom className="contenedor-galeria">
          {/* <h1 className="subtitulo">Art gallery</h1> */}
          <section className="seccion-arteAbstracto">
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
