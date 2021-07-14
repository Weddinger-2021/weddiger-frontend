import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Post = ({result}) => {
    
    return ( 
    <div className = "flex flex-wrap">
    <section>
        <img src={result.imgs_directory_path} alt="Picture of category" height="200px" width="200px" /> 
        <h2>{result.title}</h2>
        <h2> from {result.min_price} to {result.max_price}</h2>      
    </section>

</div>)
}

export default Post

export async function getServerSideProps(context) {
    const id = context.query.id;
    const res = await fetch(`https://weddinger.herokuapp.com/service/${id}`)
    const data = await res.json()
    return {props: {result: data}}
}
