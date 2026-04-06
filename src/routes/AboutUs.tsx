import Footer from '../components/footer'
import Header from '../components/header'
import MissionVision from '../features/aboutUs/missionVision'

export default function AboutUs() {

  return (
    <div className="App">
      <section>
        <Header />
      </section>

      <div className="flex flex-col gap-80 md:gap-5">
        <MissionVision />
        <Footer />
      </div>
    </div>
  )
}