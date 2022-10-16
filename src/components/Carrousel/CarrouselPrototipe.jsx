import photo1 from "./BackgroundIndex1x.jpg";
import photo2 from "./BackgroundIndex2x.jpg";
import arrow from "./Arrow.png";
import "./Carrousel.css";
import { useState } from "react";


function Carrousel() {  
  const [value,setValue] = useState(false);
  
  const photos = [photo1,photo2];

  return (
    <div className="Carrousel">
      <div className={"CarrouselImg "+ (value ? 'Next' : 'Previous')}>
        <img src={photos[0]} alt="" className="CarrouselImg1" />
        <img src={photos[1]} alt="" className="CarrouselImg2"/>
      </div>
      <div className="CarrouselArrow">
        <img src={arrow} alt="" className="CarrouselArrow1" onClick={()=>{setValue(false)}}/>
        <img src={arrow} alt="" className="CarrouselArrow2" onClick={()=>{setValue(true)}}/>
      </div>
    </div>
  );
}

export default Carrousel;
