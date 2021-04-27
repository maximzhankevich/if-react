import React, { Fragment } from 'react';
import Container from '../Container/Container';
import './TopSection.css';

import HotelBlockWrap from '../HotelBlockWrap/HotelBlockWrap'
import dataHotel from '../../variables/dataHotel'
import Title from '../Title/Title'
import HotelCard from '../HotelCard/HotelCard'


class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText : '',
            searchRes: [],
        }
    }

    heandleSearchText = (event) => {
        this.setState({ searchText: event.target.value });
    }

    heandleClick = (event) => {
        const { searchText } = this.state;
        event.preventDefault();
        const hotelName = new RegExp(`.*${searchText}+.*`, 'gim');
        const searchRes = [];
            for (let i = 0; i < dataHotel.length; i += 1) {
            const current = dataHotel[i].country + dataHotel[i].city + dataHotel[i].name;
            if (current.search(hotelName)) {
            searchRes.push(dataHotel);
           }
           this.setState({ searchRes: searchRes });
        }
        
    };
    render() {
        const { searchRes } = this.state;
        const topSection = (
            <Fragment>
                <header className = "Header">
                <Container>
                    <div className = "HeaderWrap">
                        <img src = "../../img/header/headerLogo.png" />
                        <div className = "Navigation__Innner">
                            <nav className = "Nav">
                                <a href = "#" class = "Nav__item">Stays</a>
                                 <a href="#" class = "Nav__item">Attractions</a>
                            </nav>
                        </div>    
                        <div className = "NavImg">
                            <a href = "#"><img src = "../../img/header/Night.svg" alt="NavImg" class="Nav-nightMode-img" /></a>
                            <a href= "#" ><img src = "../../img/header/AccountCircle.svg" alt="NavImg" class="Nav-account-img" /></a>
                        </div>
                    </div>    
                </Container>
            </header>
            <div className = "MainSection">
                <Container>
                    <h1 className = "MainSectionTitle">Discover stays<br /> to live, work or just relax</h1>
                    <div className = "FormDescr">
                        <p>Your destination or hotel name</p>
                        <p>Check-in — Check-out</p>
                    </div>
                    <div className = "FormInputBtn">
                        <input placeholder="New York" type="text" name="Hotel" id="Hotel" className = "Input-Hotel" value={this.state.value} onChange = {this.heandleSearchText} />
                        <input placeholder="Tue 15 Sept — Sat 19 Sept" type="text" name="Check-in — Check-out" id="Check-in—Check-out" className="Input-Check-in—Check-out" />
                        <input placeholder="2 Adults — 0 Children — 1 Room" type="text" name="2 Adults — 0 Children — 1 Room" id="Adults—0Children—1Room" className="Input-Adults—0Children—1Room" />
                        <button className="Btn" type = "submit" value = "Search" onClick = {this.heandleClick}>Search</button>
                    </div>
                </Container>
            </div>
            </Fragment>
        );
        if ( searchRes.length === 0){
            return (
                <Fragment>
                    {topSection}
                </Fragment>
                
            )
        }else if (searchRes.length > 0 ) {
            return(
               <Fragment>
                   {topSection}
                   <HotelBlockWrap>
                        <Container>
                            <Title text = "Availeble Hotels" />"
                            <HotelCard dataSearch = {searchRes} />
                         </Container>
                   </HotelBlockWrap>  
               </Fragment>
            ) 
        }

    }
};

export default TopSection;