import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'


const Post = ({ result }) => {

    return (
        <>
            <WeddHead title="Landing Page" />
            < Header />
            <div className="text-4xl sm:text-5xl font-black tracking-wide text-center relative">
                <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24" key={result.id}>
                    <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0">
                        <div className="md:w-6/12 lg:w-full flex-shrink-0 h-80 md:h-auto">
                            <img className="w-full background-image rounded bg-cover bg-center h-full" src={result.imgs_directory_path} alt="Picture of category" height="200px" width="200px" />
                        </div>
                    </div>
                    <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0">
                        <div className="md:w-6/12 mt-8 md:mt-0 md:ml-8 lg:ml-16 md:order-last">
                            <div className="lg:py-8">
                                <div className="text-4xl sm:text-5xl font-black tracking-wide text-center">
                                    <div className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
                                        {result.title}
                                    </div>
                                </div>
                                <div className="text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4">{result.description}</div>
                                <div className="mt-6 lg:mt-8 xl:mt-16 flex flex-wrap">
                                    <div className="text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left" >
                                        <div className="font-bold text-primary-500">Starting</div>
                                        <div className="font-medium text-gray-700">from</div>
                                        <div className="font-medium text-gray-700">{result.min_price} JOD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}

export default Post

export async function getServerSideProps(context) {
    const id = context.query.id;
    const res = await fetch(`https://weddinger.herokuapp.com/service/${id}`)
    const data = await res.json()
    return { props: { result: data } }
}
