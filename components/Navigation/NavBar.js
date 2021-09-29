import MobileNav from "./MobileNav";
import Desktop from "./DesktopNav";

const NavBar = ({color}) => {

    return(
        <div className="mt-10 mx-4 lg:mx-0 lg:w-10/12 xl:w-10/12 ">
            <div className=" lg:flex lg:items-center hidden ">
                <Desktop color={color}/>
            </div>

            <div className="visible items-center lg:hidden">
                <MobileNav />
            </div>
        </div>
    )
}

export default NavBar;