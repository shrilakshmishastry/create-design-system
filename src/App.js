import React from 'react';

import LeftSideNavigationBar from './components/NavigationBar/LeftSideNaviagtionBar';
import TopNavBar from './components/NavigationBar/TopNavBar';
import GlobalRouter from './routers';



function App() {
  return (
    <main className='appWrapper'>
      <TopNavBar/>
      
      <div className='centerContentWrapper'>
        <LeftSideNavigationBar/>    
        <GlobalRouter/>
      </div>      
    </main>
  );
}

export default App;
