import Link from 'next/link';


const Post = ({result}) => {
    
    return ( result ? <>
    <div className = "flex flex-wrap">
    {result.map((ele,i) =>
    <section key={i} >
        <img src={ele.imgs_directory_path} alt="Picture of category" height="200px" width="200px" /> 
        <h2>{ele.title}</h2>
        <h2> from {ele.min_price} to {ele.max_price}</h2>      
        <Link href='/service/[id].js' as={`/service/${ele.id}`}><a>{ele.title}</a></Link>
    </section>
)}
</div>
</> : <h2>Loading</h2>
)
}

export default Post

export async function getServerSideProps(context) {
    const id = context.query.pid;
    const res = await fetch(`https://weddinger.herokuapp.com/category/services/${id}`)
    const data = await res.json()
    return {props: {result: data}}
}
