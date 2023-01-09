import "./cardNuevoArticulo.css"

export function CardNuevoArticulo({img_src,nombre_articulo}) {
  return (
    <>
      <img src={img_src} />
      <div class="contentBx">
        <h2>{nombre_articulo}</h2>
        <div class="size">
          <h3>amount :</h3>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
        
        <a href="#">Buy Now</a>
      </div>
    </>
  );
}
