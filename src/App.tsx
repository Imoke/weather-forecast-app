import React from 'react';
import './App.css';
import Home from './pages/home'
import Header from './pages/common/Header'
import {CitysProvider} from './pages/common/Context/CityContext'
import Footer from './pages/common/Footer';
import { Row, Col } from 'antd';

const App: React.FC = () => {
  return (
    <div className="App">
      <CitysProvider>
        <Row>
          <Header/>
        </Row>
        <Row type="flex" justify="center" align="middle" className="main-content">
          <Col span={2}></Col>
          <Col span={20}><Home/></Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Footer/> 
        </Row> 
      </CitysProvider>
    </div>
  );
}

export default App;
