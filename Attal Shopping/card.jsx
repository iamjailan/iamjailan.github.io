import React from "react";

export default function Card(props){
    const [type, setType] = React.useState(props.type)
    return(
        <div className="card">
            <img className="card--image"  src={props.image}/>
            <div className="card--first">
                <h1>{props.company}</h1>
                <h1>{props.price}$</h1>
            </div>
            <p className="card--type">{type === 1 ? "New" : "Used"}</p>
            <p className="card--details">{props.details}</p>
            <div className="card--second">
                <p className="card--star">{props.star}</p>
                <button className="card--btn">Buy</button>
            </div>
        </div>
    )
}