import '../../App.css'
import mainDisplay from '../../assets/MGS-DarkBackground.png'

export default function Dashboard() {
  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
        <img alt='Men in Agreement' src={mainDisplay} className='absolute w-auto h-screen object-cover z-0' />

        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className='relative flex flex-col items-center justify-center text-center max-w-3xl z-20'>
            <h1 className='
                text-3xl 
                md:text-5xl
                lg:text-6xl
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