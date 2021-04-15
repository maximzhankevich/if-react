import React from 'react';
import HotelCard from '../HotelCard/HotelCard';
import Title from '../Title/Title';
import './Container.css';

function Container() {
    return (
        <div className= "Container">
            <Title />
            <HotelCard />
        </div>
    );
};

export default Container;