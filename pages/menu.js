import MenuHome from '../components/Menu/MenuHome'
import Search from '../components/Menu/FoodMenu/Search'
import Footer from '../components/Footer/Footer'

const MenuPage = () => {
    return(
        <div>
            <div className="absolute z-10 bg-black w-screen">
                <MenuHome className />
                <div className="bg-white absolute z-10 w-screen">
                    <Search />
                    <Footer />
                </div>
            </div>

        </div>      
    )
}

export default MenuPage;