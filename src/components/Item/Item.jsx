import "./Item.css"

const Item = ({id,title,price,image}) => {
  return (
    <div className="ItemConteiner">
        <div className="ItemImage"></div>
        <div className="ItemTitle"></div>
        <div className="ItemTutor"></div>
        <div className="ItemStars"></div>
        <div className="ItemPrice"></div>
    </div>
  )
}

export default Item