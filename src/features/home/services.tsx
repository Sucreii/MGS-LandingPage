import { useEffect } from 'react';
import { FadeInZoomIn, FadeInUp } from '../../utils/animation';

export default function Services({ onReady }: { onReady: () => void }) {

    useEffect(() => {
        const img = new Image();
        img.src = "/assets/BoxBG.png";
        img.onload = onReady;
    }, [onReady]);

    const services = [
        {
            icon: "./assets/CardIcon.png",
            title: "Business Registration",
            desc: "Your go-to for business activities centered around the sale of personal computers and related products."
        },
        {
            icon: "./assets/CardIcon.png",
            title: "Business Registration",
            desc: "Your go-to for business activities centered around the sale of personal computers and related products."
        },
        {
            icon: "./assets/CardIcon.png",
            title: "Business Registration",
            desc: "Your go-to for business activities centered around the sale of personal computers and related products."
        },
        {
            icon: "./assets/CardIcon.png",
            title: "Business Registration",
            desc: "Your go-to for business activities centered around the sale of personal computers and related products."
        },
        {
            icon: "./assets/CardIcon.png",
            title: "Business Registration",
            desc: "Your go-to for business activities centered around the sale of personal computers and related products."
        },
        {
            icon: "./assets/CardIcon.png",
            title: "Business Registration",
            desc: "Your go-to for business activities centered around the sale of personal computers and related products."
        },

    ]

    return (
        <div className="relative flex justify-center items-center w-full md:h-screen overflow-hidden">
            <FadeInZoomIn className='absolute h-screen md:w-screen md:h-auto'>
                <img alt='Men in Agreement' src='./assets/BoxBG.png' className='relative w-full h-full object-cover z-0' />
            </FadeInZoomIn>

            <div className="absolute inset-0 bg-black/30 z-10" />

            <div className='relative flex flex-col md:flex-row md:items-end justify-center max-w-7xl z-20'>
                <FadeInUp className='
                    section-title
                    flex
                    p-5
                    text-center
                    font-bold
                    w-full
                    md:text-left 
                    md:flex-1/3
              '>
                    We handle the Tech, so you don’t have to
                </FadeInUp>
                <div className="flex 
                    md:flex-2/3 flex-wrap">
                    {services.map((service, index) => (
                        <div key={index} className="w-full md:w-2/4 p-4">
                            <FadeInUp className="bg-[#121212] rounded-lg shadow-lg p-6 h-full">
                                <img src={service.icon} alt={service.title} className="w-12 mb-4" />
                                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                                <p className="text-gray-600">{service.desc}</p>
                            </FadeInUp>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}