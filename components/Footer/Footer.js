import Links from './Links'

import Image from 'next/image'

import apple from '../../assets/images/apple.png'
import google from '../../assets/images/google.png'

import line from '../../assets/icons/Line.svg'
import lineM from '../../assets/icons/LineM.svg'
import lineL from '../../assets/icons/LineL.svg'

const Footer = () => {
    return(
        <div>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:mx-10">
                <p className="font-druk-bold text-2xl text-gray-500 lg:ml-10"> Foodies </p>
                <div className="flex flex-row justify-center my-3">
                    <div className="mx-1">
                        <Image src={apple} alt="apple logo" />
                    </div>
                    <div className="mx-1">
                        <Image src={google} alt="google logo" />
                    </div>
                    
                </div>
            </div>
            <div className="flex md:hidden flex-col justify-center items-center">
                <Image src={line} alt="line"
                    className="w-10/12"/>
            </div>
            <div className="hidden md:flex md:ml-20 xl:hidden flex-col justify-center items-center">
                <Image src={lineM} alt="line"
                    className="w-11/12"/>
            </div>
            <div className=" hidden xl:flex flex-col justify-center items-center">
                <Image src={lineL} alt="line"
                    className="w-11/12"/>
                </div>
            <Links />
        </div>
    )
}

export default Footer;