import Slide from 'react-reveal'
import Image from 'next/image'
import Link from 'next/link'

import {AiOutlineArrowRight} from 'react-icons/ai'

import curly from '../../assets/images/curly.png'

const QuienesSomos = () => {
    return(
        <div id="acerca_de" className="relative md:ml-5 xl:w-6/12">
            <div className="hidden 
                md:flex absolute -top-9 -left-6 xl:top-10 z-0">
                <Image src={curly} alt="curly line" width={1600} height={700}/>
            </div>

            <div className=" md:text-4xl mx-5 mt-12">
                <div className="md:mr-5 z-20 md:mb-52 xl:flex xl:flex-col xl:align-baseline">
                    <div className=" md:mb-20">
                        <Slide right >
                            <h2 className="font-syne-bold mb-4 md:text-2xl 2xl:text-5xl">¿Quién es Foodie?</h2>
                            <p className="text-sm md:text-lg text-gray-500 2xl:text-3xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id sit reiciendis, 
                                vitae adipisci a laboriosam illo blanditiis distinctio, quibusdam architecto quis ?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id sit reiciendis, 
                                vitae adipisci a laboriosam illo blanditiis distinctio, quibusdam architecto quis ?
                            </p>
                        </Slide>
                    </div>
                    <Link href="/#contact" >
                        <div className="transform hover:scale-110 transition duration-300 w-max cursor-pointer">
                            <div className=" flex flex-row justify-start items-center font-syne-bold mt-6
                            md:mt-12 2xl:text-5xl 
                            xl:mt-0"> 
                                <h3 className="md:text-2xl">Contáctanos</h3>
                                <AiOutlineArrowRight className="w-7 ml-2"/>
                            </div>
                        </div> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos;