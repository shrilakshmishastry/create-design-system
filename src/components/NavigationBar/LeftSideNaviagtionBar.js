import React from 'react';

import FS from 'fs';
// import { Link } from 'react-router-dom';

const LeftSideNavigationBar = ()=>{
  FS.rename('dummy.js','d.js',err=>{
    console.log(err);
  });
  return(
    <nav>
           
     
     
    </nav>
  );
};
export default LeftSideNavigationBar;