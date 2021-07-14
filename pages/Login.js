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
  const [path, setPath] = useState('/');
  const [tokens, setTokens] = useState('')
  
  async function getData(loginInfo) {
    const {id ,token} = await login(loginInfo);
    setUserId(id)
    const check_admin = await fetchData(`provider/${id}`)
    console.log(check_admin)
    setIsAdmin(check_admin.is_admin)
    setIsLogin(true)
    const redirect_action = isAdmin ? `/serviceProvider/ProviderDash/${check_admin.id}` : "/client/Categories"
    window.location= redirect_action
  }

  function handelSubmit(e){
    e.preventDefault();
    const loginInfo = {
      username : e.target.username.value ,
        password : e.target.password.value,
      };
      console.log(loginInfo)
      getData(loginInfo)
      const redirect_action = isAdmin ? `/serviceProvider/ProviderDash/${userId}` : "/client/Categories"
      // window.location= redirect_action
      
    }


  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-5 space-y-8 rounded-lg shadow-lg bg-red-50">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-green-900 font-h">Log in</h2>
          
        </div>
        <form  className="mt-8 space-y-6" onSubmit={handelSubmit} >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                User Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full px-3 py-2 mb-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
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