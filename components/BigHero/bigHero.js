import SMimage from '../../assets/images/imageComponent.png'
import MDimage from '../../assets/images/imageComponentM.png'

import Image from 'next/image'

const bigHero = () => {
    return(
        <div className="mt-10 xl:w-6/12">
            <picture>
                <source media="(max-width: 640px)" srcSet={SMimage} className="w-full"/>
                <source media="(max-width: 1024px)" srcSet={MDimage} className="w-full"/>
                <Image src={MDimage} alt="group22" width={1100} height={800}/>
            </picture>
        </div>
    )
}

export default bigHero;