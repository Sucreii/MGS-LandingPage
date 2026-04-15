import { useEffect } from 'react';
import { FadeInUp } from '../../utils/animation';

export default function Solutions({ onReady }: { onReady: () => void }) {

    const offices = [
        { blgName: 'One San Miguel Ave.', location: 'UG3 San Miguel Avenue Ortigas, Pasig City', img: '/assets/offices/OneSanMigAve.png' },
        { blgName: 'Greenrich Mansion', location: 'Unit 102 GreenRich Mansion Lourdes St, cor Pearl Dr, Ortigas Center, Pasig, 1605 Metro Manila', img: '/assets/offices/GreenwichMansion.png' },
    ]

    useEffect(() => {
        const loadImage = (url: string) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve;
            });
        };

        Promise.all(offices.map(i => loadImage(i.img)))
            .then(() => {
                onReady();
            })
            .catch((err) => console.error("Failed to load images", err));

    }, [onReady]);

    return (
        <div className="flex flex-col gap-10 justify-center items-center overflow-hidden p-5 md:h-screen md:p-0">
            <div className="max-w-3xl text-center">
                <FadeInUp className='section-title font-bold'>
                    See our solutions in action, visit Our site offices Today
                </FadeInUp>
                <FadeInUp className='text-lg font-semibold text-[#737373] pt-3'>
                    Get your work done in the comfort of our space
                </FadeInUp>


            </div>
            <div className="flex flex-col md:flex-row gap-5 max-w-7xl w-full">
                {
                    offices.map((office, index) => (
                        <FadeInUp
                            key={index}
                            className="w-full rounded-2xl flex flex-col justify-end overflow-hidden relative h-120 p-2 bg-gray-900"
                        >
                            <img
                                src={office.img}
                                alt={office.blgName}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
                            />

                            <div className="relative z-10 bg-[#121212] h-25 p-5 rounded-lg">
                                <h2 className="text-lg text-white font-bold">{office.blgName}</h2>
                                <h2 className="text-sm text-gray-500">{office.location}</h2>
                            </div>
                        </FadeInUp>
                    ))
                }
            </div>
        </div>
    )
}