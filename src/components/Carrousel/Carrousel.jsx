import Carousel from "react-bootstrap/Carousel";
import "./Carrousel.css";

function Carrousel() {
  return (
    <div className="Carrousel">
      <Carousel>
        <Carousel.Item>
          <div className="CarrouselItem1">
            <div className="CarrouselItem1TextCont">
              <div className="CarrouselItem1Text">
                <p className="CarrouselItem1TextTitle">
                  Ahorra ya. Aprende cuando quieras.
                </p>
                <p className="CarrouselItem1TextInfo">
                  Consegui cursos y clases desde $500 y disfruta de la libertad
                  de aprender como quieras. Tu oportunidad de aprender es hoy.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="CarrouselItem2">
            <div className="CarrouselItem2TextCont">
              <div className="CarrouselItem2Text">
                <p className="CarrouselItem2TextTitle">
                  Primer clase Gratuita.
                </p>
                <p>
                  Accede a diferentes tipos de descuentos
                  <br /> y beneficios, formando parte de nuestra <br /> gran
                  comunidad de tutores y alumnos{" "}
                </p>
                <div className="CarrouselItem2Button"> Registrate </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
