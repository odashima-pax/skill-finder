import React from 'react';
import Header from './Header'
import Footer from './Footer'
import MainPage from '../pages/MainPage';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetail from '../pages/UserDetail';
import './App.css';

function App() {
  const appStyle = {
  };

  const mainStyle = {
    width: '93%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  return (
    <Router>
      <div className="app" style={appStyle}>
        <Header />
        <main style={mainStyle}>
          <Routes>
            <Route path='/' exact element={<MainPage />} />
            <Route path='/user/:id' element={<UserDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;