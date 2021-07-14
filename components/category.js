import Link from 'next/link';

export default function Category ({categories}){

  
    return (
        <div className = "flex flex-wrap m-10">
          {categories.map((category,i) =>
          <section key={i} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden m-5" >
            <div className="w-full h-10/12" >
            <img src={category.imgs_directory_path} alt="Picture of category" className="object-scale-down h-100 w-full" /></div>   
            <div className="text-center p-5 bg-red-50">       
            <Link className="text-center " href='/category/[pid].js' as={`/category/${category.id}`}><a className=" font-sat text-green-900 text-2xl hover:text-green-500" >{category.name}</a></Link>      
            </div> 
        </section>
    )}
          </div>

    )}