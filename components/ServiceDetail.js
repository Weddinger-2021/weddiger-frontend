import React from 'react'
import Image  from 'next/image'

export default function ServiceDetail({service}) {
    return (
        <div className="text-4xl sm:text-5xl font-black tracking-wide text-center relative">
            <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24" key={service.id}>
                <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0">
                    <div className="md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto">
                        <Image className="background-image rounded bg-cover bg-center h-full"  
                        alt="Picture of the author" 
                        src={service.imgs_directory_path}
                        layout="responsive"
                        width="50%"
                        height="200px"
                        />
                    </div>
                </div>
                <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0">
                    <div className="md:w-6/12 mt-8 md:mt-0 md:ml-8 lg:ml-16 md:order-last">
                        <div className="lg:py-8">
                            <div className="text-4xl sm:text-5xl font-black tracking-wide text-center">
                                <div className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
                                    {service.title}
                                </div>
                            </div>
                            <div className="text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4">{service.description}</div>
                            <div className="mt-6 lg:mt-8 xl:mt-16 flex flex-wrap">
                                <div className="text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left" >
                                    <div className="font-bold text-primary-500">Pricing</div>
                                    <div className="font-medium text-gray-700">from</div>
                                    <div className="font-medium text-gray-700">{service.min_price} </div>
                                    <div className="font-medium text-gray-700">to</div>
                                    <div className="font-medium text-gray-700">{service.max_price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




// {props.services_venues[0].images_path}
// {props.services_venues[0].title}
// {props.services_venues[0].descrption}
// {props.services_venues[0].category}
// {props.services_venues[0].provider}
// {props.services_venues[0].min_price}
// {props.services_venues[0].max_price}