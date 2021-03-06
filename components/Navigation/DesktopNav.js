import Link from 'next/link'

const Desktop = ({color}) => {
    return(
        <nav>
            <ul className={`flex flex-row justify-start text-${color}`}>
                    <li className="lg:mx-5 scroll_to font-syne-bold text-lg lg:text-xl link">
                        <Link href="/#acerca_de">Acerca de</Link> 
                    </li>
                    <li  className="lg:mx-5 scroll_to font-syne-bold text-lg lg:text-xl link">
                        <Link href="/#restaurantes">Restaurantes </Link>
                    </li>
                    <li  className="lg:mx-5 scroll_to font-syne-bold text-lg lg:text-xl link">
                        <Link href="/menu" className="">Menu</Link> 
                    </li>
                    <li  className="lg:mx-5 scroll_to font-syne-bold text-lg lg:text-xl link">
                        <Link  href="/#contact">Contáctanos</Link> 
                    </li>
                </ul>
        </nav>
    )
}

export default Desktop;