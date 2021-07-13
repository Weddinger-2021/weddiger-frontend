import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="" >
    <div className="bg-red-50 shadow-lg " >
        <nav className="w-full flex justify-between items-center  md:justify-start md:space-x-10 m-0">
             <div className=" w-full flex justify-between items-center ml-5" >
               <Link href="/">
               <div className="flex justify-between items-center" >
             <Image src="/img/logo-wedd.png" alt="Picture of the author" width={70} height={70} className="" />
             <h1 className=" font-head1 text-3xl text-center text-green-700 font-bold" >Weddinger</h1>
             </div>
             </Link>
             <div className="flex justify-between">
              {/* <p className="mt-2 text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <a href="/Login" className="text-green-600 hover:text-green-500">
                        Sign in
                      </a>
                    </p> */}
              <Link href="/SignUp" ><a className="mx-5 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">Sign up</a></Link>
              {/* <Link href="/Login" ><a className="mx-5 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">Log in</a></Link>           */}
            </div></div>
        </nav>
    </div>
    </div>
  )
}

