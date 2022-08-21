import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
          <Router>
            <Navbar />
          <div className="pages">
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </div>
          </Router>
      </>
    )
  }
}

