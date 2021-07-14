import { useState , useEffect} from "react";
import Category from "../../components/category";
import {categories} from '../../data'
import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'
import Login from "../Login";
import { fetchData } from "../api/api_get_post";

export default function category_group() {
    const [categories, setCategories] = useState([]);
    const [isLogin, setIsLogin] = useState(true);

    useEffect( async () => {
        setCategories(await fetchData('categories/'));
      },[])
    // const [token, setToken] = useState('');
  
    return (
        <div className="flex flex-col justify-between h-screen" >
            {console.log(categories) }
            <WeddHead title="Categories" />
            < Header isLogin={isLogin} />
            <div className="text-center p-5 pt-20 font-sat text-green-700 text-2xl" >
                <h2>Here we go, see the list of the categories</h2>
            </div>
            <Category categories={categories} />
            < Footer />
        </div>
    )
}
