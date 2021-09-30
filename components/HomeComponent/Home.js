import Slide from 'react-reveal'
import Image from 'next/image'
import Link from 'next/link'

import NavBar from  '../Navigation/NavBar'
import Subtract from '../../assets/images/Subtract.svg'

import rectangle from '../../assets/images/bg_text.svg'
import rectangleL from '../../assets/images/bg_textL.svg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import hamburger from '../../assets/images/hero_hamburger.svg'


const Home = () => {
    return(
        <div className="md:mb-32 xl:mb-72">

            <div className="  md:hidden absolute right-0 z-0 -top-5">
                <Image src={Subtract} alt="BgImage" width={330} height={420}/>
            </div>

            <div className="hidden md:flex xl:hidden absolute right-0 z-0">
                <Image src={Subtract} alt="BgImage" width={450} height={650}/>
            </div>

            <div className="hidden xl:flex absolute right-0 z-0">
                <Image src={Subtract} alt="BgImage" width={800} height={900}/>
            </div>
            <div className="lg:ml-10 relative z-20 md:ml-10">   
                <header className="flex flex-row justify-between items-center">
                    <h1 className="ml-4 mt-10 text-xl font-druk-bold w-2/12 
                    xl:text-3xl xl:mt-10 xl:ml-10">
                        Foodies
                    </h1>
                    <NavBar/> 
                </header>

                <div className="sm:flex flex-row-reverse justify-end">
                    <div className="flex flex-row justify-center sm:justify-start"> 
                        <div className="absolute top-24 md:top-40 md:right-10 xl:hidden">
                            <Image src={hamburger} alt="hamburger" width={312.93} height={246}/>
                        </div>

                        <div className="hidden absolute top-48 right-20 xl:flex">
                            <Image src={hamburger} alt="hamburger" width={567} height={446}/>
                        </div>
                    </div>
                    <div className=" mt-72 sm:mt-36 md:mt-24 sm:w-6/12 md:w-6/12 lg:w-5/12">
                        <div className="h-auto">
                            <Slide left >
                                <h2 className="font-druk-bold relative z-10 text-3xl leading-7 ml-5 pt-8 
                                md:text-4xl  xl:text-6xl 2xl:text-7xl">
                                    Un nuevo sabor esta en la ciudad
                                </h2>
                            </Slide>
                                <div className="relative bottom-10 ml-2 lg:hidden xl:bottom-14 xl:ml-5">
                                    <Image src={rectangle} alt="rectangle" width={242.66} height={54}/>
                                </div> 

                                <div className="hidden relative lg:flex bottom-14">
                                    <Image src={rectangleL} alt="rectangle" width={411} height={54}/>
                                </div>  
                            </div>
                        
                        <p className="relative bottom-10 font-body font-normal text-sm leading-6 px-3 mx-3 mt-5 text-gray-400 2xl:text-3xl">
                            Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables     
                        </p>
                    </div>
                </div>

                <Link href="#restaurantes">
                    <div className="transform hover:scale-110 transition duration-300 w-max cursor-pointer">
                        <div className="ml-4 flex flex-row justify-start items-center md:mt-10 relative">
                            <p className="pr-2 font-syne-bold text-lg md:text-2xl md:mr-1 2xl:text-4xl">Encuentranos</p>
                            <AiOutlineArrowRight className="md:text-2xl xl:text-4x"/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home;