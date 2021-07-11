import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>
        Helloooooooo
      </h1>
      <Link href='/client/Categories'>
        <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Categories</a>
      </Link>
    </div>
  )
}
