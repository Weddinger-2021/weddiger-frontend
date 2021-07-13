import { useState } from "react";
import Category from "../../components/category";
import {categories} from '../../data'
import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'
import Login from "../../components/Login";

export default function category_group() {
    const [isLogin, setIsLogin] = useState(false)
    function handelSubmit(e){
        setIsLogin(true)
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