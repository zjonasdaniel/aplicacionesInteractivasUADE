import "./ItemListConteiner.css";
import Data from "../mockData";

const ItemListConteiner = () => {
    
    return (
    <div className="ILCpadre">
      <div className="ILCH2P">
        <h2 className="ILCH2">Una amplia seleccion de cursos</h2>
        <p className="ILCP">Elige entre mas de 10.000 cursos de video en linea con nuevo contenido cada mes</p>
      </div>
      <div className="ILCFilterSlider">
        <div className="ILCFilter">
          <h5 > {Data.Categories[0].Name} </h5>
          <h5 >JavaScript</h5>
          <h5 >ReactJs</h5>
          <h5 >SQLserver</h5>
          <h5 >Excel</h5>
          <h5 >Ingles</h5>
          <h5 >Python</h5>
        </div>
        <div className="ILCSlider">
          <div className="ILCSliderH3P">
            <h3 className="ILCSliderH3"></h3>
            <h3 className="ILCSliderP"></h3>
          </div>
          <div className="ILCSliderContents"></div>
        </div>
      </div>
    </div>
  );
};
export default ItemListConteiner;
