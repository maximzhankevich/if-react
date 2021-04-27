import React, { Fragment } from 'react';
import './App.css';
import HotelBlockWrap from './component/HotelBlockWrap/HotelBlockWrap';
import TopSection from './component/TopSection/TopSection';

function App() {
  return (
    <Fragment>
        <TopSection />
        <HotelBlockWrap />
    </Fragment>
  );
}

export default App;
