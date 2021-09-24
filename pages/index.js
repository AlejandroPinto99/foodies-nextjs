import Home from '../components/HomeComponent/Home'
import BigHero from '../components/BigHero/bigHero'
import QuienesSomos from '../components/WhoWeAre/QuienesSomos'
import BranchOffice from '../components/BranchOffices/BranchOffices'
import Testimonials from '../components/Testimonials/Testimonials'
import ContactUs from '../components/ContactUs/ContactUs'
import DownloadApp from '../components/DownloadApp/DownloadApp'
import Footer from '../components/Footer/Footer'

const Landpage = () => {
    return(
        <div className="absolute z-10">
            <Home />
            <div className="xl:flex xl:flex-row z-10">
                <BigHero className="xl:w-6/12"/>
                <QuienesSomos className="xl:w-6/12" id="acerca_de" />
            </div>
            <BranchOffice />
            <Testimonials />
            <ContactUs />
            <DownloadApp />
            <Footer />
        </div>

    )
}

export default Landpage;