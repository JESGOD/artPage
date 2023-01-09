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
import  Galeria  from "./Galeria";
/* fin galeria */
export function Main() {
  return (
    <main>
      <header>
        <SwiperHeader />
      </header>
      <main className="contenedorP" >
        <section className="swiperArticulosNuevos ">
          <div className="textoArticulosNuevos">
            <h2 className="subtitulo">New unique design and exclusive collection</h2>
          </div>
          <ArticulosNuevos />
        </section>
        <sectiom className="contenedor-galeria">
        <h1 className="subtitulo">Galeria de arte</h1>
          <Galeria/>
          <Galeria/>
          
        </sectiom>
        <section className="preguntas-frecuentes">
          <Preguntas/>
        </section>
        
      </main>
    </main>
  );
}
