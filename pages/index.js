import Link from 'next/link'
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
    <div className="absolute top-20 left-10 w-3/6 bg-red-50 p-5 rounded-lg shadow-lg bg-opacity-60">
      <h3 className="font-sat text-3xl text-green-700 p-5" >Our business is making memories</h3>
      <p className="font-sat text-gray-500 ml-5" >Thank you for letting us share in this joyful day. We wish you all the best as you embark on this wonderful union.</p>
      <p className="font-text text-gray-500 m-5" >Now the planning for the most important day will begin.</p>
      <div className="" >
      <Link href="/client/Categories" ><a className="m-5 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">Get start</a></Link>          
      </div>
    </div>
      </main>
      < Footer />
    </div>
  )
}
