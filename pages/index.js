import WeddHead from '../components/basic/WeddHead'
import Header from '../components/basic/Header'
import Footer from '../components/basic/Footer'
import Image  from 'next/dist/client/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen" >
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
    <div className="absolute w-3/6 p-5 rounded-lg shadow-lg top-20 left-10 bg-red-50 bg-opacity-60">
      <h3 className="p-5 text-3xl text-green-700 font-sat" >Our business is making memories</h3>
      <p className="ml-5 text-gray-500 font-sat" >Thank you for letting us share in this joyful day. We wish you all the best as you embark on this wonderful union.</p>
      <p className="m-5 text-gray-500 font-text" >Now the planning for the most important day will begin.</p>
      <div className="" >
      <Link href="/client/Categories" ><a className="px-4 py-2 m-5 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700">Get start</a></Link>          
      </div>
    </div>
      </main>
      < Footer />
    </div>
  )
}
