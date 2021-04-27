
import React from 'react';
import dataHotel from '../../variables/dataHotel';
import './HotelCard.css';


function HotelCard() {
    return(
        <div className= "HotelCard">
            {dataHotel.map((element) =>
                <div >
                    <div className= "HotelCardInner">
                        <img src={element.imageUrl}  alt="Hotel"/>
                    </div>
                    <div className= "HotelCardText">
                        <h3>{element.name}</h3>
                        <p>{element.city}, {element.country}</p>
                    </div>
                </div>
            )};
        </div>
        
    );
    
};

export default HotelCard;