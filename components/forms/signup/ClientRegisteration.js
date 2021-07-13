import React from 'react'

export default function ClientRegisteration() {
    return (
        <div className="md:w-full max-w-2xl mx-auto px-4 py-5 shadow-none">
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
                    <input type="submit" value="Sign up with email" className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"/>
                </div>
            </form>
        </div>
    )
}




// Email address
// Password
// Username



