import React from 'react';
import './App.css';
import Home from './pages/home'
import Header from './pages/common/Header'
import {CitysProvider} from './pages/common/Context/CityContext'
import Footer from './pages/common/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <CitysProvider>
        <Header/>
        <Home/>
        <Footer/>
      </CitysProvider>
    </div>
  );
}

export default App;
