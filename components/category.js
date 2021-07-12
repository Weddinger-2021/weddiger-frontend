import Image from 'next/image';
import Link from 'next/link';


export default function Category ({categories}){
    return (
        <div className = "flex flex-wrap">
          {categories.map((category,i) =>
          <section key={i} >
            <Image src={category.image} alt="Picture of category" height="200px" width="200px" />            
            <h2>{category.name}</h2>
            <Link href='/client/Services'>
            <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Services</a>
            </Link>        
        </section>
      )}
      </div>
    )
}