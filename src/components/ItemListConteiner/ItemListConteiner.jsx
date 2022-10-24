import "./ItemListConteiner.css";
import "../mockData"
import Data from "../mockData";
import Item from "../Item/Item";

const ItemListConteiner = () => {
    console.log(Data)
    return (
    <div className="ILCpadre">
      <div className="ILCH2P">
        <h2 className="ILCH2">Una amplia seleccion de cursos</h2>
        <p className="ILCP">Elige entre mas de 10 cursos de video en linea con nuevo contenido cada mes</p>
      </div>
      <div className="ILCFilterSlider">
        <div className="ILCFilter">
          <p>Todos</p>
          <p>Programacion</p>
          <p>Idiomas</p>
          <p>PackOffice</p>
          <p>Musica</p>
          <p>CienciasBasicas</p>
        </div>
        <div className="ILCItemsConteiner">
          <div className="ILCItems">
            {Data.map((product)=>(
              <Item 
                key={product.Id}
                title={product.Title}
                price={product.Price}
                image={product.Image}
                id={product.Id}
                tutor={product.Tutor} 
                starts={product.Starts}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemListConteiner;
