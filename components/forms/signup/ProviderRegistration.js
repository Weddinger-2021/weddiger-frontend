import React from 'react'
import InputMask from "react-input-mask";

export default function ProviderRegistration() {
    return (
        <div className="md:w-1/2 max-w-lg mx-auto px-4 py-5 shadow-none">
            <form action="#" className="p-0">
                
                {/* email */}
                <div className="mt-5">
                    <label htmlFor="email" className="sc-bqyKva ePvcBv">Email</label>
                    <input type="text" name="email" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email"/>
                </div>

                {/* username */}
                <div className="mt-5">
                    <label htmlFor="username" className="sc-bqyKva ePvcBv">Username</label>
                    <input type="text" name="username" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="User-name"/>
                </div>
                
                {/* password */}
                <div className="mt-5">
                    <label htmlFor="password" className="sc-bqyKva ePvcBv">Password</label>
                    <input type="password" name="password" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password"/>
                </div>
                

                {/* Company_name */}
                <div className="mt-5">
                    <label htmlFor="company_name" className="sc-bqyKva ePvcBv">Company name</label>
                    <input type="text" name="company_name" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Company name"/>
                </div>
                

                {/* Phone */}
                <div className="mt-5">
                    <label htmlFor="phone" className="sc-bqyKva ePvcBv">Phone</label>
                    <InputMask id="phone" name="phone" mask="(999) 999 9999" placeholder="(023) 456-7891" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent" type="text" />

                </div>
                

                {/* Location */}
                <div className="mt-5">
                    <label htmlFor="location" className="sc-bqyKva ePvcBv">Location</label>
                    <input type="text" name="location" mask="[A-Za-z]-[A-Za-z]" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Location: City - street"/>
                </div>
                
                
                
                <div className="mt-6 block p-5 md:font-sans text-xs text-gray-800">
                    <input type="checkbox" className="inline-block border-0  "/>
                    <span display="inline" className="">By creating an account you are agreeing to our 
                        <a className="" href="/s/terms" target="_blank" data-test="Link">
                        <span className="underline ">Terms and Conditions</span> </a> and
                    <a className="" href="/s/privacy" target="_blank" data-test="Link">
                        <span className="underline">Privacy Policy</span> </a>
                    </span>
                </div>
                <div className="mt-10">
                    <input type="submit" value="Sign up with email" className="w-full bg-transparent hover:bg-green-600 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded"/>
                </div>
            </form>
        </div>
    )
}




