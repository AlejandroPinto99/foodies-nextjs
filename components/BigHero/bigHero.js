import SMimage from '../../assets/images/imageComponent.png'
import MDimage from '../../assets/images/imageComponentM.png'

import Image from 'next/image'

const bigHero = () => {
    return(
        <div className="mt-10 xl:w-6/12">
            <div className="md:hidden">
                <Image src={SMimage} alt="big hero"/>
            </div>
            <div className="hidden md:flex">
                <Image src={MDimage} alt="big hero" width={1100} height={800}/>
            </div>       
        </div>
    )
}

export default bigHero;