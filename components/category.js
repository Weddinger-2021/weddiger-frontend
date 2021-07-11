import Image from 'next/image';
import Link from 'next/link'

export default function Category (props){
    return (
        <div>
        <Image src="/img/Floral-filled-Indoor-Garden-Wedding-Inspiration-Cristy-Angulo-Photography-21.png" alt="Picture of category" height="200px" width="200px" />            
        <h2>Venues</h2>
        <Link href='client/Services'>
        <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Services</a>
        </Link>        
      </div>
    )
}