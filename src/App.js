
import History from './components/History';
import Header from './components/wrappers/Header';
import Home from './components/Home';
import Main from './components/wrappers/Main';
import CategoryBox from './components/box/CategoryBox';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from './components/Question';
import Loading from './components/wrappers/Loading';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path='/history' element={<History/>} />
      <Route  path='/category/:id' element={<Question/>} />
      <Route exact path='/loading' element={<Loading/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


