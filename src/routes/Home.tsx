import Header  from '../components/header'
import Dashboard from '../features/home/dashboard'
import WhatWeOffer from '../features/home/whatWeOffer'
import Solutions from '../features/home/solutions'
import Services from '../features/home/services'

export default function Home() {

  return (
    <div className="App">
      <section>
        <Header />
      </section>

      <Dashboard />
      <WhatWeOffer />
      <Services />
      <Solutions />
    </div>
  )
}