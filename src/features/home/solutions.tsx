

export default function Solutions() {
    const offices = [
        { blgName: 'One San Miguel Ave.', location: 'UG3 San Miguel Avenue Ortigas, Pasig City', img: '/assets/offices/OneSanMigAve.png' },
        { blgName: 'Greenrich Mansion', location: 'Unit 102 GreenRich Mansion Lourdes St, cor Pearl Dr, Ortigas Center, Pasig, 1605 Metro Manila', img: '/assets/offices/GreenwichMansion.png' },
    ]

  return (
    <div className="flex flex-col gap-10 justify-center items-center overflow-hidden p-5 md:h-screen md:p-0">
        <div className="max-w-3xl text-center">
            <h1 className='section-title font-bold'>
                See our solutions in action, visit Our site offices Today
            </h1>
            <h5 className='text-lg font-semibold text-[#737373] pt-3'>
                Get your work done in the comfort of our space
            </h5>

           
        </div>
        <div className="flex flex-col md:flex-row gap-5 max-w-7xl w-full">
                {
                    offices.map((office, index) => (
                        <div 
                            key={index}
                            className="w-full rounded-2xl flex flex-col justify-end overflow-hidden relative h-120 bg-cover bg-center p-2"
                            style={{ backgroundImage: `url(${office.img})` }}
                        >
                            
                            <div className="bg-[#121212] h-25 p-5 rounded-lg ">
                                <h2 className="text-lg text-white font-bold">{office.blgName}</h2>
                                <h2 className="text-sm text-gray-500">{office.location}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}