import WeddHead from '../components/basic/WeddHead'
import Header from '../components/basic/Header'
import Footer from '../components/basic/Footer'

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between" >
      <WeddHead title ="Landing Page" />
      < Header />
      < Footer />
    </div>
  )
}
