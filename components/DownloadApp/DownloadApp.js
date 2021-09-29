import Slide from 'react-reveal'
import Image from 'next/image'

import Step from './Step'

import phone from '../../assets/images/phone.png'
import phoneM from '../../assets/images/phoneM.png'
import phoneL from '../../assets/images/phoneL.png'
import line2 from '../../assets/images/line_app.svg'

const DownloadApp = () => {
    return(
        <div className="relative mt-48 mb-36  bg-white lg:mt-10 z-0 lg:mb-72 xl:mt-0 xl:mb-52"> 
            <div className="flex flex-row justify-center md:mb-36">
                <div className="absolute self-center -top-96 md:hidden">
                    <Image src={phone} alt="phone"/>
                </div>
                <div className="hidden absolute self-center -top-96 md:flex xl:hidden ">
                    <Image src={phoneM} alt="phone" width={650} height={700}/>
                </div>
                <div className="hidden absolute self-center -top-32 -left-24 xl:flex ">
                    <Image src={phoneL} alt="phone" width={1198} height={1031}/>
                </div>
            </div>
            <div>
                <div className="lg:flex lg:flex-col lg:items-end">
                    <div className="lg:w-8/12 xl:w-6/12 xl:relative xl:-top-24">
                            <div className=" flex flex-col font-druk-bold text-3xl text-center mb-20 lg:mb-12">
                                <Slide right >
                                    <p className=" mb-2 mt-10 ">Obten más beneficios</p>
                                    <div className="relative z-10">
                                        <p className="relative z-10">
                                            Descarga nuestra App
                                        </p>
                                        <svg width="90% " height="80" viewBox="0 0 329 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className="absolute z-0 top-0 mx-4 sm:-left-12 ">
                                            <rect x="`0.560425" y="4.42261" width="150%" height="110%" transform="rotate(-0.641723 0.560425 4.42261)" fill="#FFD600"/>
                                        </svg>
                                    </div>
                                </Slide>
                            </div>
                            <div className="md:flex md:flex-col justify-center items-center relative">
                                <div className="hidden md:flex absolute z-0 md:top-16 md:right-32 lg:right-32 xl:top-12 xl:right-42 flip-horizontally">
                                    <Image src={line2} alt="line" />
                                </div>
                                <div className="hidden md:flex absolute z-0 md:top-16 md:left-32 lg:left-32 xl:top-12 xl:left-42">
                                    <Image src={line2} alt="line2"  />
                                </div>
                                <Slide down >
                                    <div className="md:flex md:flex-row justify-center items-center xl:text-xl relative z-10">
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
                                    <div className="md:w-6/12 lg:text-center lg:absolute lg:top-64 xl:text-xl">
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