import React from 'react';
import "./Prod.css";
const Prod = (props) => {
    return (
        <div className="card">
            <img src={props.imgsc} alt="mypic" className="card__img" />
            <div className="card__info">
                <h3 className="card__category">{props.title}</h3>
                <p className="card__title">{props.description}</p>
                <h3 className='card_price' style={{fontSize:14}}>{props.price}$</h3>
            </div>
        </div>

    )
}
export default Prod;