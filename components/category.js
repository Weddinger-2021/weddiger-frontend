import Link from 'next/link';

export default function Category ({categories}){

  
    return (
        <div className = "flex flex-wrap m-10">
          {categories.map((category,i) =>
          <section key={i} className="w-full max-w-sm m-5 mx-auto overflow-hidden rounded-md shadow-md" >
            <div className="w-full h-10/12" >
            <img src={category.imgs_directory_path} alt="Picture of category"className="object-scale-down w-full h-100" /></div>           
            <Link href='/category/[pid].js' as={`/category/${category.id}`}>
    <div class="text-center p-5 bg-red-50"><a class=" font-sat text-green-900 text-2xl hover:text-green-500" href="/category/1">{category.name}</a></div></Link>      
        </section>
    )}
          </div>

    )}

