

export default function MissionVision() {
    const missionVision = [
        { 
            label: 'Mission', 
            description: 'Revolutionizing the market with top-tier, affordable equipment and unparalleled service. Committed to exceeding customer needs and fostering lasting partnerships through innovation and cost-effectiveness. Empowering success for individuals and businesses.', 
            img: '/assets/Mission.png' 
        },
        { 
            label: 'Vision', 
            description: 'Pioneering technology solutions with unmatched service. Your trusted partner for cutting-edge products, quality service and customer empowerment.', 
            img: '/assets/Vision.png' 
        }
    ]

  return (
    <div className="flex flex-col gap-10 justify-center items-center overflow-hidden py-50 p-5">
        <div className="max-w-5xl flex flex-col gap-10 text-center">
            <h1 className='section-title font-bold'>
            Your registered partner for business consultancy and management in the Philippines
            </h1>
            <h5  
                className="
                text-sm
                md:text-md
                lg:text-lg 
                font-bold 
                text-[#B4E700]"
            >
            From logistics to hiring, we help companies establish their presence in Manila. Leveraging a vast network of contacts.
            </h5>
        </div>
        <div className="flex flex-col md:flex-row gap-50 md:gap-5 max-w-7xl w-full md:pb-20">
                {
                    missionVision.map((i, index) => (
                        <div 
                            key={index}
                            className="w-full rounded-2xl flex flex-col justify-end relative h-120 bg-cover bg-center p-2"
                            style={{ backgroundImage: `url(${i.img})` }}
                        >
                            
                            <div className="h-25 p-5 rounded-lg text-center -mb-20">
                                <h2 className="text-lg text-white font-bold uppercase">{i.label}</h2>
                                <h2 className="text-sm text-gray-500">{i.description}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}