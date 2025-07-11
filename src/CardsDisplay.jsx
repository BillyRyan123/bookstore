const CardsDisplay=(props)=>{
    return(
        <div>
         <img src={props.image} alt={props.description} className="w-full h-40  object-cover rounded-md mb-4 "/>
          <p className="mt-2 text-black text-center">{props.name}</p>
          <p className="mt-2 text-black text-center">{props.description}</p>
          <p className="mt-2 text-black text-center">{props.category}</p>
          <p className="mt-2 text-black text-center">{props.price}</p>
        </div>
    )
}
export default CardsDisplay;