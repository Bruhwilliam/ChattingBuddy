import './App.css';
import React, { useState } from 'react';
import axios from "axios"
import {MainView} from './views/MainView'
import {StoreView} from './views/StoreView'
import { OtterContextProvider } from './data/otter';
function App() {
  
  return (
    <OtterContextProvider>
  <div>
    <MainView>
    </MainView>
    </div>
    </OtterContextProvider>
  );
}

export default App;
