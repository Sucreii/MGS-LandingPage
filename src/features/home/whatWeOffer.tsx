

export default function Offer() {
    
    const offers = [
        { id: '01', title: 'Staff Leasing', description: 'Partner with us for recruitment, salaries, and HR admin, ensuring smooth operations for your project-specific or temporary staff.' },
        { id: '02', title: 'Outsourcing', description: 'Let us handle specific tasks, freeing you to focus on core activities for maximum efficiency.' },
        { id: '03', title: 'Payroll Services', description: 'We handle it all—calculating wages, withholding taxes, and ensuring precise, timely payments for your employees.' },
        { id: '04', title: 'Payroll Services', description: 'From finding to onboarding, we streamline the entire hiring journey for your specific positions.' },
        { id: '05', title: 'IT Consultancy', description: 'Secure your tech identity—scalable, secure, and built for innovation.' },
        { id: '06', title: 'Business Registration', description: 'Register your business to ensure exclusivity in your company structure—various options available.' },
    ]

  return (
    <div className="md:flex justify-center items-center w-full overflow-hidden p-5 md:h-screen md:p-0">
        <div className="max-w-lg">
            <h5 className='text-[#B4E700]'>WHAT WE OFFER</h5>
            <h1 className='section-title'> Start lean. </h1>
            <h1 className='section-title'> Scale smart. </h1>
            <h1 className='section-title'> We've got your back-office handled. </h1>
        </div>

        <div className="max-w-xl">
            {
                offers.map((item, index) => (
                    <div key={index} className='relative pb-5 block-full'>
                        <h1 className='font-semibold text-lg'> {item.title} </h1>
                        <h5 className='font-semibold text-[#737373]'> {item.description} </h5>
                    </div>
                ))
            }
        </div>
    </div>
  )
}