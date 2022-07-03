
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeforeYouStart from './components/BeforeYouStart/BeforeYouStart';
import CarouselContainer from './components/CarouselContainer';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='before-you-start' element={<BeforeYouStart />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <CarouselContainer />
    // </div>
  )
}

export default App;