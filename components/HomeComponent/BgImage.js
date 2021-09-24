import Image from 'next/image'

import Subtract from '../../assets/images/Subtract.svg'
import SubtractM from '../../assets/images/SubtractM.svg'
import SubtractL from '../../assets/images/SubtractL.svg'

const BgImage= () => {
    return(
        <div>
            <div className="md:hidden">
                <Image src={Subtract} alt="hamburger" />
            </div>
            <div className="hidden md:flex lg:hidden">
                <Image src={SubtractM} alt="hamburger"  />
            </div>

            <div className="hidden lg:flex">
                <Image src={SubtractL} alt="hamburger" />
            </div>
        </div>
    )
}
export default BgImage