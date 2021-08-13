import React, { useEffect, useState } from 'react';
import CardSummary from './components/SummaryCard/CardSummary';
import './styles/style.css';
import BackgroundBg from './images/pattern-background-desktop.svg';
import BackgroundBgMobile from './images/pattern-background-mobile.svg';

function App() {
  const [isMobile, setMobile] = useState(false) ;

    useEffect(() => {
        const handleWindowResize = () => {
            const bool =  window.innerWidth < 768 ? true : false;
            setMobile(bool) 
                
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
        window.removeEventListener('resize', handleWindowResize);
        }
    }, []);


  return (
    <section className="App__main">
      <div className="App__image">
        <img src={!isMobile ? BackgroundBg : BackgroundBgMobile} alt="" />
      </div>
      
      <CardSummary />

    </section>
  );
}

export default App;
