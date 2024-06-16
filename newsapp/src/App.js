import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
 
  
  render() {
    return (
      <div>
     
        <Router>
          <Navbar />
         
          <Routes>
            <Route exact path="/" element={<News key="General" pageSize={15} country="in" category="General" />} />
            <Route exact path="/Business" element={<News key="Business" pageSize={15} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={15} country="in" category="Entertainment" />} />
            <Route exact path="/General" element={<News key="General" pageSize={15} country="in" category="General" />} />
            <Route exact path="/Health" element={<News key="Health" pageSize={15} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News key="Science" pageSize={15} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News key="Sports" pageSize={15} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News key="Technology" pageSize={15} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
