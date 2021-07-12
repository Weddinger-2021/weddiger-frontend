import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'
import AddService from '../../components/forms/ServiceForm' 
export default function serviceAdd() {
    return(
        <>
        <WeddHead title ="Landing Page" />
        < Header />
        <AddService/>
        < Footer />
        </>
    )
}
