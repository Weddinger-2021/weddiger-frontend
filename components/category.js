import Image from 'next/image';
import Link from 'next/link';


export default function Category ({categories}){
    return (
        <div className = "flex flex-wrap">
          {categories.map((category,i) =>
          <section key={i} class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden" >

            <div class="flex items-end justify-end h-56 w-full bg-cover">
            <Image src={category.image} alt="Picture of category" layout = "responsive"/>  
            </div>
              
            <div class="px-5 py-3">
              <h3 class="text-gray-700 uppercase">{category.name}</h3>
            </div>

            <Link href='/client/Services'>
            <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Services</a>
            </Link>        
        </section>
      )}
      </div>
    )
}

{/* <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=376&amp;q=80')">
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                        <div class="px-5 py-3">
                            <h3 class="text-gray-700 uppercase">{category.name}</h3>
                            <span class="text-gray-500 mt-2">$12</span>
                        </div>
                    </div> */}