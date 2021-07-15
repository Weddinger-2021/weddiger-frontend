import Link from 'next/link';
import WeddHead from '../../components/basic/WeddHead';
import Header from '../../components/basic/Header';
import Footer from '../../components/basic/Footer';

const Post = ({result}) => {
    
    return ( result ? <>
     <WeddHead title="Categories" />
    < Header/>
    <div className = "flex flex-wrap m-10">
    {result.map((ele,i) =>
    <section key={i} className="w-full max-w-sm m-5 mx-auto overflow-hidden rounded-md shadow-md" >
         <div className="w-full h-10/12" >
        <img src={ele.imgs_directory_path} className="object-scale-down w-full h-100"  /></div>   
        <Link href='/service/[id].js' as={`/service/${ele.id}`}><div class="text-center p-5 bg-red-50"><a class=" font-sat text-green-900 text-2xl hover:text-green-500" href="/category/1">{ele.title}</a></div></Link>
        
    </section>
    
    

)}
</div>
<Footer/>
</> : <h2>Loading</h2>
)
}

export default Post

export async function getServerSideProps(context) {
    const id = context.query.pid;
    const res = await fetch(`https://weddinger.herokuapp.com/category/services/${id}`)
    const data = await res.json()
    return { props: { result: data } }
}

// alt="Picture of category" height="200px" width="200px"