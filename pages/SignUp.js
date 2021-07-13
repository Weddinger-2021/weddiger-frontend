import React from 'react'
import ProviderRegistration from '../components/forms/signup/ProviderRegistration'
import ClientRegisteration from '../components/forms/signup/ClientRegisteration'
import { useState } from 'react'
import WeddHead from '../components/basic/WeddHead'
import Header from '../components/basic/Header'
import Footer from '../components/basic/Footer'


export default function SignUpForm() {
    const [userType, sesrUserType] = useState('client')

    function handleUserType(e) {
        e.preventDefault()
        console.log(e.target.value)
        sesrUserType(e.target.value)
    }

    return (
        <>
        <div className="flex flex-col justify-between h-screen" >

            <WeddHead title="Landing Page" />
            < Header />
            <div className="w-2/4  mx-auto">
                <div className="flex justify-around mt-8 p-5 w-full mx-auto ">
                    <div className="w-1/5 text-center bg-transparent hover:bg-green-600 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">
                        <button onClick={handleUserType} value="client">Client</button>
                    </div>
                    <div className="w-1/5 text-center bg-transparent hover:bg-green-600 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">
                        <button onClick={handleUserType} value="provider">Provider</button>
                    </div>
                </div>
                {userType == 'client' ? <ClientRegisteration /> : <ProviderRegistration />}
            </div>
            < Footer />
            </div>
        </>
    )
}
