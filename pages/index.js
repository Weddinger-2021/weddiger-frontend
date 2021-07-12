import WeddHead from '../components/basic/WeddHead'
import Header from '../components/basic/Header'
import Footer from '../components/basic/Footer'
import Image  from 'next/dist/client/image'


export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between" >
      <WeddHead title ="Landing Page" />
      < Header />
      <main className="relative" >
      <Image
      className="-z-1"
      alt="banner"
      src="/img/banner-wedd.jpg"
      layout="responsive"
      width={650}
      height={400}
    />
    <div className="absolute top-20 left-10 w-2/6 bg-red-50 p-5 rounded-lg shadow-lg">
      <h3 className="font-text text-2xl text-green-700 p-2" >Our business is making memories</h3>
      <p className="font-text text-gray-500" >Thank you for letting us share in this joyful day. We wish you all the best as you embark on this wonderful union.</p>
    </div>
      </main>
      < Footer />
    </div>
  )
}
