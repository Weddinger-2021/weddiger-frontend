import { useState , useEffect} from "react";
import Category from "../../components/category";
import {categories} from '../../data'
import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'
import Login from "../../components/Login";
import { fetchData } from "../api/api_get_post";

export default function category_group() {
    const [categories, setCategories] = useState([]);
    // const [isLogin, setIsLogin] = useState(true);
    
    // const [token, setToken] = useState('');
    async function getCat(){
        setCategories(await fetchData('categories'));
    }
    getCat()
    return (
        <div className="flex flex-col justify-between h-screen" >
            <WeddHead title="Categories" />
            < Header />
            <Category categories={categories} />
            < Footer />
        </div>
    )
}
