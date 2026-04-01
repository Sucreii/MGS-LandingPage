export default function Services() {
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
        <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
            <img alt='Men in Agreement' src='./assets/BoxBG.png' className='absolute w-screen h-auto object-cover z-0' />

            <div className="absolute inset-0 bg-black/30 z-10" />

            <div className='relative flex flex-col md:flex-row md:items-end justify-center max-w-7xl z-20'>
                <h1 className='
                    flex 
                    md:flex-1/3
                    text-3xl 
                    md:text-5xl
                    lg:text-6xl
                    font-bold
                    w-full
              '>
                    We handle the Tech, so you don’t have to
                </h1>
                <div className="flex 
                    md:flex-2/3 flex-wrap">
                    {services.map((service, index) => (
                        <div key={index} className="w-full md:w-2/4 p-4">
                            <div className="bg-[#121212] rounded-lg shadow-lg p-6 h-full">
                                <img src={service.icon} alt={service.title} className="w-12 mb-4" />
                                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}