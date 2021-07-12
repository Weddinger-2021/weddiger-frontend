import Category from "../../components/category";
import {categories} from '../../data'
import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'

export default function category_group() {
    return (
        <div className="flex flex-col h-screen justify-between" >
            <WeddHead title="Categories" />
            < Header />
            <Category categories={categories} />
            < Footer />
        </div>


    )
}