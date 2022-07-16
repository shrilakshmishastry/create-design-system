import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Button from '../pages/componentsGroup/button';
import Dummy from '../pages/componentsGroup/dummy';
import Home from '../pages/home';
import Theme from '../pages/theme';
const GlobalRouter = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="theme" element={<Theme/>} />
      <Route  path="component" >
        <Route path="" element={<Dummy/>}  />
        <Route path="button" element={<Button/>} />
      </Route>    
    </Routes>
  );
};

export default GlobalRouter;