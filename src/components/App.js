import React from 'react';
import Header from './Header'
import Footer from './Footer'
import MainPage from '../pages/MainPage';
import './App.css';

function App() {
  const mainStyle = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#363636',
  }
  return (
    <div className="app">
      <Header />
      <main style={mainStyle}>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;