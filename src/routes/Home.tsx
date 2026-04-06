import Header from '../components/header'
import WhatWeOffer from '../features/home/whatWeOffer'
import Solutions from '../features/home/solutions'
import Services from '../features/home/services'
import HeroSection from '../features/home/heroSection'
import ContactUsHome from '../features/home/contactUs'
import Footer from '../components/footer'

export default function Home() {

  return (
    <div className="App">
      <section>
        <Header />
      </section>

      <div className="flex flex-col gap-80 md:gap-5">
        <div>
        <HeroSection />
        <WhatWeOffer />
        </div>
        <Services />
        <Solutions />
        <ContactUsHome />
        <Footer />
      </div>
    </div>
  )
}