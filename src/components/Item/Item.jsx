import "./Item.css"

const Item = ({id,title,price,image,tutor,starts}) => {
  return (
    <div className="ItemConteiner">
        <div className="ItemImage"><img src={image} alt="" /></div>
        <div className="ItemTitle">{title}</div>
        <div className="ItemTutor">{tutor}</div>
        <div className="ItemStars">{starts} ⭐⭐⭐⭐</div>
        <div className="ItemPrice">{price} US$</div>
    </div>
  )
}

export default Item