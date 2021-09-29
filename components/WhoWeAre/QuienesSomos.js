import Slide from 'react-reveal'
import Image from 'next/image'
import Link from 'next/link'

import {AiOutlineArrowRight} from 'react-icons/ai'

import curly from '../../assets/images/Curly.svg'

const QuienesSomos = () => {
    return(
        <div id="acerca_de" className="relative md:ml-5 xl:w-6/12">
            <div className="hidden  w-full
                md:flex md:absolute md:z-0 md:-mt-32 md:-ml-2
                xl:w-full xl:top-56">
                <Image src={curly} alt="curly line" />
            </div>

            <div className="md:text-4xl mx-5 mt-12 mb-8">
                <div className="md:mr-5 relative z-20 md:mb-52 xl:flex xl:flex-col xl:align-baseline">
                    <div className=" md:mb-20">
                        <Slide right >
                            <h2 className="font-syne-bold mb-4 2xl:text-5xl">¿Quién es Foodie?</h2>
                            <p className="text-sm md:text-lg text-gray-500 2xl:text-3xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id sit reiciendis, 
                                vitae adipisci a laboriosam illo blanditiis distinctio, quibusdam architecto quis ?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id sit reiciendis, 
                                vitae adipisci a laboriosam illo blanditiis distinctio, quibusdam architecto quis ?
                            </p>
                        </Slide>
                    </div>
                
                    <div className="flex flex-row justify-start items-center font-syne-bold mt-6 md:mt-12 2xl:text-5xl"> 
                        <h3>Contáctanos</h3>
                        <AiOutlineArrowRight className="w-10 ml-2 "/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos;