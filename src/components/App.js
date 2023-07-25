import React from 'react';
import Header from './Header'
import Footer from './Footer'
import MainPage from '../pages/MainPage';
import Typography from '@mui/material/Typography';
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
    <div className="app"  style={appStyle}>
      <Header />
      <main style={mainStyle}>
        <Typography variant="h1" style={{
          fontFamily: 'acumin-pro, "Noto Sans JP", sans-serif',
          fontWeight: 700,
          fontSize: 144,
          lineHeight: '144px',
          color: '#fff',
          textAlign: 'start',
          margin: '40px 0',
          // marginBottom: '40px',
        }}>
          Members
        </Typography>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;