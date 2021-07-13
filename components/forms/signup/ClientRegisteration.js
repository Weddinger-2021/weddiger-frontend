import React from 'react'

export default function ClientRegisteration() {
    return (
        <div className="md:w-full max-w-2xl mx-auto px-4 py-5 shadow-none">
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
                    <input type="submit" value="Sign up with email" class="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"/>
                </div>
            </form>
        </div>
    )
}




// Email address
// Password
// Username



