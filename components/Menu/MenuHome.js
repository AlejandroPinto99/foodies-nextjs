import Image from 'next/image'

import NavBar from  '../Navigation/NavBar'
import BgImage from './BgImage'

import Slide from 'react-reveal'

import rectangle from '../../assets/images/bg_text.svg'
import hamburger from '../../assets/images/hero_hamburger_menu.png'

const MenuHome = () => {
    return(
        <div>
            <div className="absolute right-0 z-0">
                <BgImage />
            </div>
            <div className="lg:ml-10 relative z-10">   

                <header className="flex flex-row justify-between items-center">
                    <h1 className="ml-4 font-druk-bold text-3xl w-3/12 text-white">Foodies</h1>
                    <NavBar className="mr-4" color="white"/> 
                </header>

                <div className="md:flex flex-row-reverse">
                    <div className="flex justify-center items-center md:w-6/12"> 
                        <div className="mt-10 w-80 md:w-96 xl:w-100">
                            <Image src={hamburger} alt="hamburger"  width={1600} height={1400} priority/>
                        </div>
                    </div>

                    <div className="md:w-6/12">
                        <div className="mb-5">
                            <Slide left>
                                <p className="font-druk-bold relative z-10 text-3xl leading-8 px-3 mx-3 pt-8 text-white
                                md:text-5xl xl:text-6xl">
                                    Cada sabor es una nueva
                                </p>
                                <div className="max-w-lg">
                                    <p className="font-druk-bold relative z-10 text-3xl leading-8 px-3 mx-3 mb-24 mt-2 text-black
                                        md:text-5xl xl:text-6xl"> experiencia</p>
                                        
                                    <div className="relative  z-0 -top-32 md:-top-40 xl:left-3">
                                        <Image src={rectangle} alt="rectangle" width={600} height={100} priority/>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuHome;