import './App.css';
import React, { useState } from 'react';
import axios from "axios"
import {MainView} from './views/MainView'
import {StoreView} from './views/StoreView'
import { OtterContextProvider } from './data/otter';
import { Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <OtterContextProvider>
  <div>
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/store" element={<StoreView />} />
    </Routes>    </div>
    </OtterContextProvider>
  );
}

export default App;
