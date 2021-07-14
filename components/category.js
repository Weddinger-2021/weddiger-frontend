import Link from 'next/link';

export default function Category ({categories}){

  
    return (
        <div className = "flex flex-wrap m-10">
          {categories.map((category,i) =>
          <section key={i} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden m-5" >
            <div className="w-full h-10/12" >
            <img src={category.imgs_directory_path} alt="Picture of category"className="object-scale-down h-100 w-full" /></div>           
            <Link href='/category/[pid].js' as={`/category/${category.id}`}><a>{category.name}</a></Link>      
        </section>
    )}
          </div>

    )}