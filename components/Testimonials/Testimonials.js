import { useState } from 'react'
import Slide from 'react-reveal'
import makeCarousel from 'react-reveal/makeCarousel';
import Image from 'next/image'

import image from '../../assets/images/Subtract_Red.svg'
import image2 from '../../assets/images/Subtract_Red_rotated.svg'

import ketchup from '../../assets/images/ketchup.png'


const Testimonials = () => {
    const CarouselUI = ({position, handleClick, children}) => (
        <div className="overflow-hidden relative">
            {children}
        <div className="mt-52 md:mb-20">
            <div className="text-center py-5 flex flex-row items-center justify-center z-20">
                <div onClick={handleClick} data-position={position - 1} className="z-10 ">

                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6 xl:h-16 xl:w-10 text-sm mx-2 md:mt-12" fill="none" viewBox="0 0 24 24" 
                    stroke='#FFD600'>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>

                    <p className="font-syne-bold text-gray-500 
                    md:text-2xl md:mt-12
                    xl:text-2xl"> 
                        {position + 1} / {testimonials.length}
                    </p>

                    <div onClick={handleClick} data-position={position + 1} className=" z-10 ">
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6 xl:h-16 xl:w-10 text-sm mx-2 md:mt-12" fill="none" viewBox="0 0 24 24"
                                stroke='#FFD600'
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />      
                            </svg>
                        }
                    </div>
                </div>
        </div>
        </div>
    );

    const Carousel = makeCarousel(CarouselUI)


    const testimonials = [
        {
            "tittle": "\"El mejor lugar para degustar en familia y amigos!\"",
            "testimony": "Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rapido y te atienden de la mejor manera."
        }, 
        {
            "tittle" : "\"Las hamburguesas mas ricas que he probado desde hace tiempo\"",
            "testimony": "Las hamburguesas son muy buenas, la carne es de sabrosa y de calidad, el pan es suave, y las variedades de queso son lo mejor"
        }, 
        {
            "tittle" : "\"El servicio es rapidisimo!\"",
            "testimony": "Pedimos la comida, y en menos de 10 minutos ya teniamos todos nuestras hamburguesas en la mesa"
        },
        {
            "tittle" : "\"Limpieza impecable\"",
            "testimony": "He visitado todos los establecimientos de Foodies, y en todos ellos la limpieza es milimetrica. La limpieza de las mesas es inmediata"
        },
        {
            "tittle" : "\"Idea para pasar a comer algo rico y economico!\"",
            "testimony": "El precio y la calidad de las hamburguesas van de la mano, es comida deliciosa, por un precio razonable"
        }
]

    return(
        <div className="relative md:mt-48 lg:mt-12 xl:mt-12">
            <div className="relative hidden md:flex">
                <div  className="absolute right-0 z-0">
                    <Image src={image} alt="red_back"/>
                </div>

                <div className="absolute left-0 -bottom-72 z-0" >
                    <Image src={image2} alt="red_back" />
                </div>
                <div className="hidden xl:flex xl:absolute xl:right-0 xl:-top-32 z-0" >
                    <Image src={ketchup} alt="ketchup" />
                </div>
            </div>
            <Carousel>
                <Slide right>
                    <div className="flex flex-col items-center">
                        <p className="font-druk-bold text-xl mt-4 mb-3 px-5 text-center 
                        md:mx-52 md:mb-8 md:text-3xl
                        xl:text-4xl">
                            {testimonials[0].tittle}
                        </p>
                        <p className="text-gray-400 text-center px-2 leading-5 text-md flex flex-row justify-center
                        md:mx-20 md:mb-24 
                        xl:text-2xl xl:w-6/12 ">
                            {testimonials[0].testimony}
                        </p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="flex flex-col items-center">
                        <p className="font-druk-bold text-xl mt-12 mb-3 px-5 text-center 
                        md:text-3xl md:mx-52 md:mb-8 
                        xl:text-4xl ">
                            {testimonials[1].tittle}
                        </p>
                        <p className="text-gray-400 text-center px-2 leading-5 text-md flex flex-row justify-center 
                        md:mx-20 md:mb-24 
                        xl:w-6/12 xl:text-2xl ">
                            {testimonials[1].testimony}
                        </p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="flex flex-col items-center"> 
                        <p className="font-druk-bold text-xl mt-12 mb-3 px-5 text-center 
                        md:text-2xl md:mx-52 md:mb-8
                        xl:text-4xl">
                            {testimonials[2].tittle}
                        </p>
                        <p className="text-gray-400 text-center px-2 leading-5 text-md flex flex-row justify-center
                        md:mx-20 md:mb-24 xl:text-2xl 
                        xl:w-6/12 ">
                            {testimonials[2].testimony}
                        </p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="flex flex-col items-center">
                        <p className="font-druk-bold text-xl mt-12 mb-3 px-5 text-center
                        md:text-2xl md:mx-52 md:mb-8
                        xl:text-4xl ">
                            {testimonials[3].tittle}
                        </p>
                        <p className="text-gray-400 text-center px-2 leading-5 text-md flex flex-row justify-center
                        md:mx-20 md:mb-24 xl:text-2xl 
                        xl:w-6/12 ">
                            {testimonials[3].testimony}
                        </p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="flex flex-col items-center">
                        <p className="font-druk-bold text-xl mt-12 mb-3 px-5 text-center
                        md:text-2xl md:mx-52 md:mb-8
                        xl:text-4xl">
                            {testimonials[4].tittle}
                        </p>
                        <p className="text-gray-400 text-center px-2 leading-5 text-md flex-row justify-center
                        md:mx-20 md:mb-24 xl:text-2xl 
                        xl:w-6/12 flex ">
                            {testimonials[4].testimony}
                        </p>
                    </div>
                </Slide>        
            </Carousel>
                    

            
        </div>
    )
}

export default Testimonials