import Link from 'next/link'
import WeddHead from '../components/basic/WeddHead'
import Header from '../components/basic/Header'
import Footer from '../components/basic/Footer'

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen" >
      <WeddHead title ="Landing Page" />
      < Header />
      {/* this link should be in service provider dashboard */}
      <button><Link href="/serviceProvider/ProviderDash">dashboard page</Link></button>
      
      < Footer />
    </div>
  )
}
