import React, { Fragment } from 'react';
import './HotelBlockWrap.css';
import Container from'../Container/Container';
import Title from '../Title/Title';
import HotelCard from '../HotelCard/HotelCard';
import dataHotel from '../../variables/dataHotel';

function HotelBlockWrap() {
    return (
        <Fragment>
            <div className= "Hotel-block__wrap">
                <Container>
                    <Title text = 'Homes guests loves'/>
                    <HotelCard dataSearch={dataHotel}/>
                </Container>
            </div>
        </Fragment>
        
    );
};

export default HotelBlockWrap;