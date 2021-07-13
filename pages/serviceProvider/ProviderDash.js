import WeddHead from '../../components/basic/WeddHead'
import Header from '../../components/basic/Header'
import Footer from '../../components/basic/Footer'
import AddService from '../../components/forms/ServiceForm'
import DashProvidrTableRow from '../../components/ProviderService'
import DashProviderHeader from '../../components/ProviderHeader'

export default function serviceAdd() {
    return (
        <>
            <WeddHead title="Landing Page" />
            < Header />
            <div class="flex flex-justify bg-gray-100 w-full h-screen">
                <DashProviderHeader />
                <DashProvidrTableRow/>
            </div>
            < Footer />
        </>
    )
}
