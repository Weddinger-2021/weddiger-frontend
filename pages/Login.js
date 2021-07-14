import { useState } from "react";
import { login } from "./api/api_get_post";
import { Redirect } from "next";
import Link from "next/link";
import axios from "axios";
import { fetchData } from "./api/api_get_post";
// import { Redirect } from "next/dist/lib/load-custom-routes";

export default function Login(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(0);
  const [isAdmin, setIsAdmin] = useState(true);

  
  async function getData(loginInfo) {
    const {id ,token} = await login(loginInfo);
    setUserId(id)
    const check_admin = await fetchData(`provider/${id}`)
    console.log(check_admin)
    setIsAdmin(check_admin.is_admin)
  }

  function handelSubmit(e){
    e.preventDefault();
    const loginInfo = {
      username : e.target.username.value ,
        password : e.target.password.value,
      };
      console.log(loginInfo)
      getData(loginInfo)
      setIsLogin(true)
      window.location= redirect_action
      
    }
    const redirect_action = isAdmin ? "/serviceProvider/ProviderDash" : "/client/Categories"


  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="bg-red-50 p-5 rounded-lg shadow-lg max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-h font-extrabold text-green-900">Log in</h2>
          
        </div>
        <form  className="mt-8 space-y-6" onSubmit={handelSubmit} >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                User Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">

            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              // onClick="window.location.href='/'"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              Log in
            </button>
            <p>Don't have an account? <Link href="/SignUp" className="" > SignUp </Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}