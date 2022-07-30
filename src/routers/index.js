import React from 'react';
import { Route,Routes } from 'react-router-dom';

import { BubblesDummy } from '../pages/bubbles';
import Button from '../pages/builders/button';
import Dummy from '../pages/builders/dummy';
import Home from '../pages/home';
import { LayoutDummy } from '../pages/layouts';
import {ThemeDummy } from '../pages/theme';
const GlobalRouter = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />     
      <Route  path="bubbles" >
        <Route path="" element={<BubblesDummy />}  />        
      </Route> 
      <Route  path="builders/" >
        <Route path="" element={<Dummy/>}  />
        <Route path="button" element={<Button/>} />
      </Route>  
      <Route  path="theme/" >
        <Route path="" element={<ThemeDummy />}  />       
      </Route>  
      <Route  path="layouts/" >
        <Route path="" element={<LayoutDummy />}  />      
      </Route>  
    </Routes>
  );
};

export default GlobalRouter;