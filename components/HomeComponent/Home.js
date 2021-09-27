import Slide from 'react-reveal'
import Image from 'next/image'
import Link from 'next/link'

import NavBar from  '../Navigation/NavBar'
import BgImage from './BgImage'

import rectangle from '../../assets/images/bg_text.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import hamburger from '../../assets/images/hero_hamburger.svg'


const Home = () => {
    return(
        <div className="md:mb-96">
            <div className="absolute right-0 z-0">
                <BgImage />
            </div>
            <div className="lg:ml-10 relative z-20">   

                <header className="flex flex-row justify-between items-center">
                    <h1 className="ml-4 font-druk-bold text-3xl w-3/12 2xl:text-6xl mt-5">Foodies</h1>
                    <NavBar className="mr-4"/> 
                </header>

                <div className="md:flex flex-row-reverse">
                    <div className="flex justify-center sm:justify-end items-center md:w-6/12"> 
                        <div className="h-24 mb-40">
                            <Image src={hamburger} alt="hamburger" width={1100} height={500}/>
                        </div>
                    </div>
                    <div className="mt-10 md:w-6/12">
                        <div className="mb-5">
                        <Slide left >
                            <h2 className="font-druk-bold relative z-10 text-4xl leading-8 px-3 mx-3 pt-8 
                            md:text-5xl 2xl:text-7xl">
                                Un nuevo sabor esta en la ciudad
                            </h2>
                        </Slide>
                            <div className="absolute -mt-20 -ml-5  z-0 w-80 md:w-100 
                            xl:w-400 xl:h-10 xl:-mt-10 xl:top-52 ">
                                <Image src={rectangle} alt="rectangle" width={500} height={70}/>
                            </div>   
                        </div>
                        
                        <p className="font-body font-normal text-m leading-6 px-3 mx-3 mt-3 text-gray-400 2xl:text-3xl">
                            Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables     
                        </p>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center mt-3 md:mt-10 ">
                    <p className="mx-4 px-2 font-syne-bold text-lg md:text-2xl md:mr-1 2xl:text-4xl">Encuentranos</p>
                <Link href="#restaurantes"><a><AiOutlineArrowRight className="md:text-2xl xl:text-4xl"/></a></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;