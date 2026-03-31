import './App.css'
import Header  from './components/header'
import Dashboard from './pages-comp/home/dashboard'
import WhatWeOffer from './pages-comp/home/whatWeOffer'
import Solutions from './pages-comp/home/solutions'

export default function App() {

  return (
    <div className="App">
      <section>
        <Header />
      </section>

      <Dashboard />
      <WhatWeOffer />
      <Solutions />
    </div>
  )
}