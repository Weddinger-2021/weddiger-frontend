import Image from 'next/image'
import Link from 'next/link'

export default function Header({ isLogin }) {
  return (
    <div className = "" >
    <div className="bg-red-50 shadow-lg " >
      <nav className="w-full flex justify-between items-center  md:justify-start md:space-x-10 m-0">
        <div className=" w-full flex justify-between items-center ml-5" >
          <Link href="/">
            <div className="flex justify-between items-center" >
              <Image src="/img/logo-wedd.png" alt="Picture of the author" width={70} height={70} className="" />
              <h1 className=" font-head1 text-3xl text-center text-green-700 font-bold" >Weddinger</h1>
            </div>
          </Link>
          <div className="flex justify-between text-xs">
            {isLogin ? 
              <Link href="/LogOut" ><a className="mx-5 px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">Log Out</a></Link>          
              :   
              <Link href="/Login" ><a className="mx-5 px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">Log in</a></Link>          
               }
          </div></div>
      </nav>
    </div>
    </div>
  )
}

