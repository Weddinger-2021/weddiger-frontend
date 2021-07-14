import Link from 'next/link';

export default function Category ({categories}){

  
    return (
        <div className = "flex flex-wrap">
          {categories.map((category,i) =>
          <section key={i} >
            <img src={category.imgs_directory_path} alt="Picture of category" height="200px" width="200px" />            
            <Link href='/category/[pid].js' as={`/category/${category.id}`}><a>{category.name}</a></Link>      
        </section>
    )}
          </div>

    )}