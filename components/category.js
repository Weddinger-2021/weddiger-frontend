import Image from 'next/image';
import Link from 'next/link';


export default function Category ({data}){
    return (
        <div className = "">
          {data.map((category,i) =>
          <section key={i} >
            <h2>{category.name}</h2>
            <Image src={category.image} alt="Picture of category" height="200px" width="200px" />            
            <Link href='/Services'>
            <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Services</a>
            </Link>        
        </section>
      )}
      </div>
    )
}