import React from 'react'
import InputMask from "react-input-mask";

export default function ProviderRegistration() {
    return (
        <div className="md:w-1/2 max-w-lg mx-auto px-4 py-5 shadow-none">
            <form action="#" class="p-0">
                
                {/* email */}
                <div class="mt-5">
                    <label for="email" class="sc-bqyKva ePvcBv">Email</label>
                    <input type="text" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email"/>
                </div>

                {/* username */}
                <div class="mt-5">
                    <label for="email" class="sc-bqyKva ePvcBv">Username</label>
                    <input type="text" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="User-name"/>
                </div>
                
                {/* password */}
                <div class="mt-5">
                    <label for="email" class="sc-bqyKva ePvcBv">Password</label>
                    <input type="password" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password"/>
                </div>
                

                {/* Company_name */}
                <div class="mt-5">
                    <label for="email" class="sc-bqyKva ePvcBv">Company name</label>
                    <input type="text" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Company name"/>
                </div>
                

                {/* Phone */}
                <div class="mt-5">
                    <label for="email" class="sc-bqyKva ePvcBv">Phone</label>
                    <InputMask id="phone" mask="(999) 999 9999" placeholder="(023) 456-7891" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent" type="text" />

                </div>
                

                {/* Location */}
                <div class="mt-5">
                    <label for="email" class="sc-bqyKva ePvcBv">Location</label>
                    <input type="text" mask="[A-Za-z]-[A-Za-z]" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Location: City - street"/>
                </div>
                
                
                
                <div class="mt-6 block p-5 md:font-sans text-xs text-gray-800">
                    <input type="checkbox" class="inline-block border-0  "/>
                    <span display="inline" class="">By creating an account you are agreeing to our 
                        <a class="" href="/s/terms" target="_blank" data-test="Link">
                        <span class="underline ">Terms and Conditions</span> </a> and
                    <a class="" href="/s/privacy" target="_blank" data-test="Link">
                        <span class="underline">Privacy Policy</span> </a>
                    </span>
                </div>
                <div class="mt-10">
                    <input type="submit" value="Sign up with email" class="w-full bg-transparent hover:bg-green-600 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded"/>
                </div>
            </form>
        </div>
    )
}




