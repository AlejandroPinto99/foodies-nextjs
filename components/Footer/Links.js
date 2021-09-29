import Link from 'next/link'

const Links = () => {
    return(
        <div className="flex justify-center pb-10  mt-5 
        xl:justify-start  
        lg:ml-4 
        md:mb-5 md:mt-2 md:justify-start">
            <ul className="md:w-8/12 md:flex md:justify-between md: items-center md:flex-wrap md:mx-10">
                <li className="text-center mb-5 md:my-0 text-gray-400 text-sm font-roboto md:text-lg md:mx-5"><Link href="/#restaurantes">Conoce nuestras sucursales</Link></li>
                <li className="text-center my-5 md:my-0 text-gray-400 text-sm font-roboto md:text-lg md:mx-5"><Link href="/acerca_de">Acerca de </Link></li>
                <li className="text-center my-5 md:my-0 text-gray-400 text-sm font-roboto md:text-lg md:mx-5"><Link href="/#">¿Qué hablan de nosotros?</Link></li>
                <li className="text-center mt-5 md:my-0 text-gray-400 text-sm font-roboto md:text-lg md:mx-5"><Link  href="/contactanos">Contáctanos</Link></li>
            </ul>
        </div>
    )
}

export default Links