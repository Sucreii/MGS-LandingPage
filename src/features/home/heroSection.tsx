export default function HeroSection() {
  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
        <img alt='Men in Agreement' src='./assets/MGS-DarkBackground.png' className='absolute w-auto h-screen object-cover z-0' />

        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className='relative flex flex-col items-center justify-center text-center max-w-3xl z-20 p-5'>
            <h1 className='
                section-title
                font-bold
            '>
                Where we believe every business is a Partnership
            </h1>
            <h5 className='
                text-sm
                md:text-md
                lg:text-lg 
                font-bold 
                text-[#B4E700]
            '>
                A registered business and marketing firm in the Philippines since 2016
            </h5>
        </div>
    </div>
  )
}