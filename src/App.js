
import History from './components/pages/History';
import Home from './components/pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from './components/pages/Question';
import Loading from './components/wrappers/Loading';
import About from './components/pages/About';
import Feedback from './components/pages/Feedback';
import LongQsView from './components/pages/LongQsView';
import Empty from './components/wrappers/Empty';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path='/history' element={<History/>} />
      <Route  path='/category/:id' element={<Question/>} />
      <Route exact path='/loading' element={<Loading/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/feedback' element={<Feedback/>} />
      <Route path='/answers/:id' element={<LongQsView/>} />
      <Route path='/empty' element= {<Empty/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


