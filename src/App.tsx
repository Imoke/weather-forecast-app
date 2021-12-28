import React from 'react';
import './App.css';
import Home from './pages/home'
import Header from './pages/common/Header'
import {CitysProvider} from './pages/common/Context/CityContext'
import { BrowserRouter, Route} from 'react-router-dom';
import Footer from './pages/common/Footer';
// import { Row, Col } from 'antd';

const App: React.FC = () => {
  return (
    <div className="App">
      <CitysProvider>
        <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" exact component={Home}></Route>
              <Footer/> 
            </div>
        </BrowserRouter>
      </CitysProvider>
    </div>
  );
}

export default App;
