import React from 'react';

import LeftSideNavigationBar from './components/NavigationBar/LeftSideNaviagtionBar';
import TopNavBar from './components/NavigationBar/TopNavBar';
import GlobalRouter from './routers';

import './App.css';

function App() {
  return (
    <main>
      <TopNavBar/>
      <div>
        <LeftSideNavigationBar/>
        <GlobalRouter/>
      </div>      
    </main>
  );
}

export default App;
