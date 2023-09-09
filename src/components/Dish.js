let Dish = (props) => {
    return (
        <div className="dish-card">
            <img className="dish-card-image" src={props.dishImg}/>
            <h4>{props.dishName}</h4>
            <p>{props.desc}</p>
            <p>&#8377; {props.cost}</p>
        </div>
    )
}

export default Dish;