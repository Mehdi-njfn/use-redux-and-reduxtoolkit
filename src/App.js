import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import Contact from './contact';
import Login from './login';
import { store } from './Store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Link style={{marginInline:'20px'}} to='/login' >login</Link>
        <Link to='/contact' >contact</Link>
        <Routes>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
