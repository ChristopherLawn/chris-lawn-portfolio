import React, { useState } from 'react';
import Header from './components/Header/header';
import MainContent from './components/MainContent/maincontent';
// import Footer from './components/Footer/footer';

function App() {
  const [page, setPage] = useState('about')
  return (
    <div className='main-background'>
      <Header setPage={setPage} />
      <MainContent page={page} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
