import Head from 'next/head'
import AddService from '../components/forms/ServiceForm'
import Link from 'next/link'

export default function Home() {
  return (
    // This link should be in service provider dashboard
    <div >
            <button><Link href="/serviceProvider/ServiceAdd">Service Add Form</Link></button>
    </div>
  )
}
