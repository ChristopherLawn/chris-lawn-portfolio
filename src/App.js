import React, { useState } from 'react';
import Header from './components/Header/header';
import MainContent from './components/MainContent/maincontent';
import Footer from './components/Footer/footer';

function App() {
  const [page, setPage] = useState('about')
  return (
    <div>
      <Header setPage={setPage} />
      <div className='main-background'>
        <div className='test'>
          <MainContent page={page} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
