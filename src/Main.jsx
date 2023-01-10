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
const seccionAbstract = document.querySelector(".seccion-arteAbstracto");
const seccionPixel = document.querySelector(".seccion-pixelArt");

opcPix.addEventListener("click", function () {
  seccionPixel.classList.add("show");
  seccionAbstract.style.display = "none";
});

opcAbstract.addEventListener("click", function () {
  seccionAbstract.style.display = "flex";
  seccionPixel.classList.remove("show");
});

/* iamgeens para la galeria */
let imgsAbstract = [
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-09_600X600.jpg?v=1637656508",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-10_600X600.jpg?v=1637656512",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-08_600X600.jpg?v=1637656391",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-07_600X600.jpg?v=1637661698",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-04_600X600.jpg?v=1637665747",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-03_600X600.jpg?v=1637665756",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-02_600X600.jpg?v=1637665723",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-01_600X600.jpg?v=1637665664",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-06_600X600.jpg?v=1637665719",
  "//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-05_600X600.jpg?v=1637665695",
];
let imgsPixel = [
  "https://pbs.twimg.com/media/EBN1s_bW4AEsRqA.png",
  "https://i.pinimg.com/474x/3b/f0/ef/3bf0ef69d644447bed812b33ab466af4--vaporwave-pixel-art-pixel-art-animation.jpg",
  "https://pbs.twimg.com/profile_images/1532880021689446403/yB2plUdP_400x400.jpg",
  "https://pbs.twimg.com/media/D77Pn6YWsAAFNRw.png",
  "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1448150097/content-items/001/459/236/03-original.png?1448150097",
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Pixel_Art_Cat_with_Zoom-in_Detail.png",
  "https://i.pinimg.com/474x/9c/78/4a/9c784a229040c0f710cfb63bb20d038c.jpg",
  "https://media.composition.gallery/glossary/What-is-pixel-art-composition1542550648.png",
  "https://i.pinimg.com/736x/04/93/44/049344f91ffed9cb0d62eac09ab9cacc--pixel-pixel-pixel-art.jpg",
  "https://pbs.twimg.com/tweet_video_thumb/DyVfabjXQAEjsqu.jpg",
];
/* iamgeens para la galeria */

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
            <li className="opciones opc-abstract">
              <a href="#menu-galeria" className="subtitulo opc-abs">
                Abstract art
              </a>{" "}
            </li>
            <li className="opciones opc-pixel">
              <a href="#menu-galeria" className="subtitulo opc-pix">
                Pixel Art
              </a>{" "}
            </li>
          </ul>
        </div>
        <sectiom className="contenedor-galeria">
          {/* <h1 className="subtitulo">Art gallery</h1> */}
          <section className="seccion-arteAbstracto ">
            <Galeria imgs={imgsAbstract} />
          </section>
          <section className="seccion-pixelArt">
            <Galeria imgs={imgsPixel} />
          </section>
        </sectiom>
        <section className="preguntas-frecuentes">
          <Preguntas />
        </section>
      </main>
    </main>
  );
}
