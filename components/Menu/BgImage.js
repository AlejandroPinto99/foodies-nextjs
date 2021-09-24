import Subtract from '../../assets/images/Subtract_Menu.svg'
import SubtractM from '../../assets/images/Subtract_Menu_M.svg'
import SubtractL from '../../assets/images/Subtract_Menu_L.svg'

import Image from 'next/image'

const BgImage= () => {
    return(
        <div >
            <div className="md:hidden">
                <Image src={Subtract} alt="hamburger"/>
            </div> 
            <div className="hidden lg:hidden md:flex">
                <Image src={SubtractM} alt="hamburger"/>
            </div>
            <div className="hidden lg:flex">
                <Image src={SubtractL} alt="hamburger"/>
            </div>                      
        </div>
    )
}
export default BgImage