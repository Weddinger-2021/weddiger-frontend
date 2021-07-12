import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
    <div className="bg-red-50 shadow-md " >
        <nav className="w-full flex justify-between items-center  md:justify-start md:space-x-10 m-0">
             <Image src="/img/logo-wedd.png" alt="Picture of the author" width={70} height={70} className="" />
             <div className=" w-full flex justify-between items-center" >
             <h1 className=" text-2xl text-center text-green-700 font-bold" >Weddinger</h1>
             <div className="m-5">
              <Link href="/SignUp" ><a className="m-5 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">Sign up</a></Link>
              <Link href="/Login" ><a className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">Log in</a></Link>          
            </div></div>
        </nav>
    </div>
    </div>
  )
}

