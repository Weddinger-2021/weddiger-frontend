import Image from 'next/image'
import Link from 'next/link'

export default function Header({ isLogin }) {
  return (
    <div className = "" >
    <div className="shadow-lg bg-red-50 " >
      <nav className="flex items-center justify-between w-full m-0 md:justify-start md:space-x-10">
        <div className="flex items-center justify-between w-full ml-5 " >
          <Link href="/">
            <div className="flex items-center justify-between" >
              <Image src="/img/logo-wedd.png" alt="Picture of the author" width={70} height={70} className="" />
              <h1 className="text-3xl font-bold text-center text-green-700  font-sat" >Weddinger</h1>
            </div>
          </Link>
          <div className="flex justify-between text-xs">
            {isLogin ? 
              <Link href="/LogOut" ><a className="px-2 py-1 mx-5 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700">Log Out</a></Link>          
              :   
              <Link href="/Login" ><a className="px-2 py-1 mx-5 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700">Log in</a></Link>          
               }
          </div></div>
      </nav>
    </div>
    </div>
  )
}

