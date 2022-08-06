import React from 'react';
import { Route,Routes } from 'react-router-dom';

//import theme here 
import Home from '../pages/home';




const GlobalRouter = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />    
      {/* theme router here  */}
    </Routes>
  );
};

export default GlobalRouter;