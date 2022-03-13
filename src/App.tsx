import React, { useState } from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/01-Home/Home';

export let pageState = React.createContext<any>({})
function App() {

  let [state,setState]=useState({LightModeToggle:false})
  return (
    <div className="App">
      <BrowserRouter>
        <pageState.Provider value={{state,setState}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </pageState.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
