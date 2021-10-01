import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import MobileNavExtended from "./MobileNavExtended";


const MobileNav = () => {
    const [nav, setNav] = useState(false);

    return(
        <div>
            <nav className="flex flex-row-reverse">  
            <GiHamburgerMenu size="30px" className="cursor-pointer"
            onClick={()=> setNav(true)}/>        
                {
                nav ? (
                    <div>
                        <MobileNavExtended isOpen={nav} closeDialog={() => setNav(false)}/>
                    </div>
                    ) : null
                }         
            </nav>
        </div>
    )
}

export default MobileNav;