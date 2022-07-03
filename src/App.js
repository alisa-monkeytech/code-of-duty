
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarouselContainer from './components/CarouselContainer';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <CarouselContainer />
    // </div>
  )
}

export default App;