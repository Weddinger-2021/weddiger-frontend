import Image from 'next/image';
import Link from 'next/link';


export default function Service ({services_venues}){
    return (
        <div className = "flex flex-wrap">
          {services_venues.map((service,i) =>
          <section key={i} >
            <Image src={service.images_path[0]} alt="Picture of category" height="200px" width="200px" />            
            <h2>{service.title}</h2>
            <Link href='/ServiceDetail'>
            <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Service Details</a>
            </Link>        
        </section>
      )}
      </div>
    )
}