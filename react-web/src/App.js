import React from 'react';
import './App.css';
import NavBar from './components/NavigationBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import CorkBoard from './views/CorkBoard';
import BeautyRoom from './views/BeautyRoom';
import MusicalUniverse from './views/MusicalUniverse';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/corkboard' component={CorkBoard} />
          <Route path='/beautyroom' exact component={CorkBoard} />
          <Route path='/musicaluniverse' component={CorkBoard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;