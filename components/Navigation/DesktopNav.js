import Link from 'next/link'

const Desktop = ({color}) => {
    return(
        <nav>
            <ul className={`flex flex-row justify-start text-${color} `}>
                    <li className="mx-10 scroll_to font-syne-bold text-lg mr-12 links lg:text-2xl ">
                        <Link href="/#acerca_de">Acerca de</Link> 
                    </li>
                    <li  className="mx-10 scroll_to font-syne-bold text-lg mr-12 links lg:text-2xl">
                        <Link href="/#restaurantes">Restaurantes </Link>
                    </li>
                    <li  className="mx-10 scroll_to font-syne-bold text-lg mr-12 links lg:text-2xl">
                        <Link href="/menu" className="">Menu</Link> 
                    </li>
                    <li  className="mx-10 scroll_to font-syne-bold text-lg mr-12 links lg:text-2xl">
                        <Link  href="/#contact">Contáctanos</Link> 
                    </li>
                </ul>
        </nav>
    )
}

export default Desktop;