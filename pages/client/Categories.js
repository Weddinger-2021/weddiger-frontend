import { useState , useEffect} from "react";
import Category from "../../components/category";
import {categories} from '../../data'
import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'
import Login from "../../components/Login";
import { fetchData } from "../api/api_get_post";
import Link from 'next/link';


export default function category_group() {
    const [categories, setCategories] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    
    const [token, setToken] = useState('');
    
    // useEffect(() => {
    //     localStorage.setItem('accessToken', token);
    // }, [token]);

    function handelSubmit(e){
        e.preventDefault();
        const loginInfo = {
            email : e.target.email.value ,
            password : e.target.password.value,
          };
          getData(loginInfo)
        setIsLogin(true)
      }

     async function getData() {
        setCategories(await fetchData('categories'));
    }

    if (isLogin){
    return (
        <div className="flex flex-col h-screen justify-between" >
            <WeddHead title="Categories" />
            < Header />
            <Category categories={categories} />
            < Footer />
        </div>
    )}else{
        return(
            <Login isLogin={isLogin} handelSubmit={handelSubmit} />
        )
    }
}