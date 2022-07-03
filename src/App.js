
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeforeYouStart from './components/BeforeYouStart/BeforeYouStart';
import Riddles from './components/Riddles/Riddles';
import Home from './components/Home/Home';
import MathRiddle from './components/MathRiddle/MathRiddle';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='before-you-start' element={<BeforeYouStart />} />

        <Route path='riddles' >
          <Route path="math" element={<MathRiddle />}/>
          <Route index element={<Riddles />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <CarouselContainer />
    // </div>
  )
}

export default App;