import React from 'react'
import './App.css';
import Main from './components/Main';
import BrowserRouter from "react-router-dom/BrowserRouter";




function App() {
  
  return (
      <React.Fragment>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
