import { useCallback, useEffect, useState } from 'react';
import Header from '../components/header'
import WhatWeOffer from '../features/home/whatWeOffer'
import Solutions from '../features/home/solutions'
import Services from '../features/home/services'
import HeroSection from '../features/home/heroSection'
import ContactUsHome from '../features/home/contactUs'
import Footer from '../components/footer'
import Loading from '../components/loading';

export default function Home() {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = 3;
  const isAllLoaded = loadedCount >= totalImages;

  const handleImageLoad = useCallback(() => {
    console.log(loadedCount)
    setLoadedCount(prev => prev + 1);
  }, [])

  useEffect(() => {
    if (!isAllLoaded) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; 
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isAllLoaded]);

  return (
    <div className="App">

      {!isAllLoaded && (
        <Loading />
      )}

      <section>
        <Header />
      </section>

      <div className="flex flex-col gap-80 md:gap-5">
        <div>
          <HeroSection onReady={handleImageLoad} />
          <WhatWeOffer />
        </div>
        <Services onReady={handleImageLoad}/>
        <Solutions onReady={handleImageLoad}/>
        <ContactUsHome />
        <Footer />
      </div>
    </div>
  )
}