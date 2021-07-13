import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Category ({categories}){
    return (
        <div className = "m-5 flex flex-wrap">
          {categories.map((category) =>
            <Link key={category.id}  href='/client/Services'>
          <section className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" >
            <img src={category.imgs_directory_path} alt="Picture of category"  className="" />
            {/* <Image src={category.imgs_directory_path} alt="Picture of category" height="200px" width="200px" />             */}
            <h2>{category.name}</h2>
            {/* <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Services</a> */}
          </section>
            </Link>        
      )}
      </div>
    )
}