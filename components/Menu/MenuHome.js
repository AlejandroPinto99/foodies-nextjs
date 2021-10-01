import Image from 'next/image'

import NavBar from  '../Navigation/NavBar'
import Subtract from '../../assets/images/Subtract_Menu.svg'
import SubtractM from '../../assets/images/Subtract_Menu_M.svg'
import SubtractL from '../../assets/images/Subtract_Menu_L.svg'
import Slide from 'react-reveal'

import rectangle from '../../assets/images/bg_text.svg'
import rectangleL from '../../assets/images/bg_textL.svg'
import rectangleXL from '../../assets/images/bg_textXL.svg'
import hamburger from '../../assets/images/hero_hamburger_menu.png'

const MenuHome = () => {
    return(
        <div className="md:pb-24">
            <div className="md:hidden absolute right-0 z-0 -top-5">
                <Image src={Subtract} alt="background" width={595} height={544} />
            </div> 
            <div className="hidden md:flex xl:hidden right-0 top-0 absolute z-0">
                <Image src={SubtractM} alt="background" width={600} height={721}  />
            </div>
            <div className="hidden xl:flex absolute z-0 top-0 right-0">
                <Image src={SubtractL} alt="background" width={1021} height={935} />
            </div>           
            <div className="lg:ml-10 relative z-10">   

                <header className="flex flex-row justify-between items-center lg:justify-start">
                    <h1 className="ml-4 font-druk-bold text-3xl w-3/12 text-white mt-10">Foodies</h1>
                    <NavBar className="mr-4" color="white"/> 
                </header>

                <div className="md:flex flex-row-reverse">
                    <div className="flex justify-center items-center md:w-6/12"> 
                        <div className="mt-10 w-80 md:hidden ">
                            <Image src={hamburger} alt="hamburger"  width={1600} height={1400} priority/>
                        </div>
                        <div className="hidden md:flex mt-10">
                            <Image src={hamburger} alt="hamburger"  width={400} height={300} priority/>
                        </div>
                        <div className="hidden mt-10 ">
                            <Image src={hamburger} alt="hamburger"  width={800} height={446} priority/>
                        </div>
                    </div>

                    <div className="md:w-6/12">
                        <div className="mb-5 md:mt-12">
                            <Slide left>
                                <p className="font-druk-bold relative z-10 text-3xl leading-8 px-3 mx-3 pt-8 text-white
                                md:text-4xl xl:text-6xl">
                                    Cada sabor es una nueva
                                </p>
                                <div className="max-w-lg relative">
                                    <p className="font-druk-bold relative z-10 text-3xl leading-8 px-3 mx-3 mb-24 text-black
                                        md:text-4xl xl:text-6xl"> experiencia</p>
                                        
                                    <div className="absolute z-0 -top-4 left-4 md:hidden">
                                        <Image src={rectangle} alt="rectangle" width={295} height={54} priority/>
                                    </div>

                                    <div className="hidden absolute  z-0 -top-0 left-3 md:flex xl:hidden">
                                        <Image src={rectangleL} alt="rectangle" width={337.75} height={54} priority/>
                                    </div>
                                    <div className="hidden absolute z-0 -top-0 left-5 xl:flex">
                                        <Image src={rectangleXL} alt="rectangle" width={537.75} height={70} priority/>
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