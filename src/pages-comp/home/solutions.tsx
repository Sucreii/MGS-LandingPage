import '../../App.css'

export default function Solutions() {
    const offices = [
        { id: 'first', blgName: 'One San Miguel Ave.', location: 'UG3 San Miguel Avenue Ortigas, Pasig City' },
        { id: 'second', blgName: 'Greenrich Mansion', location: 'Unit 102 GreenRich Mansion Lourdes St, cor Pearl Dr, Ortigas Center, Pasig, 1605 Metro Manila' },
    ]

  return (
    <div className="flex justify-center items-center overflow-hidden p-5 md:h-screen md:p-0">
        <div className="max-w-3xl text-center">
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>
                See our solutions in action, visit Our site offices Today
            </h1>
            <h5 className='text-lg font-semibold text-[#737373] pt-3'>
                Get your work done in the comfort of our space
            </h5>
        </div>
    </div>
  )
}