import Slide from 'react-reveal'
import Image from 'next/image'

import Step from './Step'

import phone from '../../assets/images/phone.svg'
import line from '../../assets/images/line_app.svg'
import line2 from '../../assets/images/line2_app.svg'

const DownloadApp = () => {
    return(
        <div className="relative mt-64 bg-white lg:mt-10 z-0"> 

            <div>
                <div className="hidden md:flex md:absolute md:right-24 md:top-56 lg:right-8 lg:top-48 xl:right-28 xl:top-1/4">
                    <Image src={line} alt="line" />
                </div>
                <div className="hidden md:flex md:absolute md:left-28 md:top-56 lg:left-200 lg:top-48 xl:left-450 xl:top-1/4">
                    <Image src={line2} alt="line2"  />
                </div>
                
                <div className="lg:flex lg:flex-col lg:items-end">
                    <div className="lg:w-6/12">
                            <div className="relative z-20 flex flex-col font-druk-bold text-3xl text-center mb-20 lg:mb-12">
                                <Slide right >
                                    <p className="relative z-20 mb-2">Obten más beneficios</p>
                                    <p className="relative z-20">
                                        Descarga nuestra App
                                    </p>
                                </Slide>
                                <svg width="100%" height="80" viewBox="0 0 329 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="absolute z-0 top-2/4 w-9/12 h-18 mx-10 md:w-9/12 lg:w-10/12">
                                    <rect x="0.560425" y="4.42261" width="150%" height="110%" transform="rotate(-0.641723 0.560425 4.42261)" fill="#FFD600"/>
                                </svg>
                            </div>
                            <div className="md:flex md:flex-col justify-center items-center">
                                <Slide down >
                                    <div className="md:flex md:flex-row justify-center items-center xl:text-xl">
                                        <Step 
                                            step="01"
                                            tittle="Solicita rápido"
                                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Quam nesciunt ratione reprehenderit natus corrupti at"
                                        />

                                        <Step 
                                            step="02"
                                            tittle="Fácil de usar"
                                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Quam nesciunt ratione reprehenderit natus corrupti at"
                                        />
                                    </div>
                                    <div className="md:w-6/12 lg:text-center  xl:text-xl">
                                        <Step 
                                            step="03"
                                            tittle="Promociones especiales"
                                            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Quam nesciunt ratione reprehenderit natus corrupti at"
                                        />
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>  
                </div>
        </div>
    )
}

export default DownloadApp;