import WeddHead from '../../../components/basic/WeddHead'
import Header from '../../../components/basic/Header'
import Footer from '../../../components/basic/Footer'
import ProviderHeader from '../../../components/ProviderHeader'
import ProviderService from '../../../components/ProviderService'

const Post = ({result}) => {
    console.log(result)
    return ( 
        <>
        <WeddHead title="Landing Page" />
        < Header />
        <div class="flex flex-justify bg-gray-100 w-full h-screen">
            <ProviderHeader providerInfo={result[0]}/>
            <ProviderService services = {result[1]}/>
        </div>
        < Footer />
    </>
        )
}

export default Post

export async function getServerSideProps(context) {
    const id = context.query.id;
    const res = await fetch(`https://weddinger.herokuapp.com/provider/services/${id}`)
    const data = await res.json()
    const res2 = await fetch(`https://weddinger.herokuapp.com/provider/${id}`)
    const services = await res2.json()
    return {props: {result: [services, data]}}
}
