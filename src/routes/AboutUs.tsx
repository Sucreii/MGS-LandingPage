import { useCallback, useEffect, useState } from 'react';
import Footer from '../components/footer'
import Header from '../components/header'
import MissionVision from '../features/aboutUs/missionVision'
import Loading from '../components/loading';

export default function AboutUs() {
    const [loadedCount, setLoadedCount] = useState(0);
    const totalImages = 1;
    const isAllLoaded = loadedCount >= totalImages;

    const handleImageLoad = useCallback(() => {
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
                <MissionVision onReady={handleImageLoad} />
                <Footer />
            </div>
        </div>
    )
}