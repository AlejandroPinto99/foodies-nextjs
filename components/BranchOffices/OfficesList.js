import { useEffect, useState } from 'react'

import Image from 'next/image'

import Card from './Card'
import Map from './MapBox'

import notFound from '../../assets/icons/NotFound.svg'

const OfficeList = ({offices, found}) => {
    const [selected, setSelected] = useState();
    const [element, setElement] = useState();

    useEffect(() => {
        setElement(offices.find(element => element.id === selected))
    }, [selected])


    return(
        <div className="md:flex md:flex-col lg:flex lg:flex-row">
            <div className="md:w-full lg:w-6/12  ">
            {
                offices.length !== 0 ? (
                offices.map((office, key) => {
                    return(
                        <Card 
                            styleRule={`my-3 mx-3 pt-3 pb-4 pl-2 pr-4 ${!(selected === office.id) ? 'border border-black rounded-md big-white' : 
                            'border border-transparent bg-yellow-200'} transition duration-500 ease-in-out hover:border-yellow-100 
                            hover:bg-yellow-100 transform hover:-translate-y-1 hover:scale-100 
                            md:mx-20 lg:mx-0 lg:ml-10 xl:mr-0 cursor-pointer`}
                            onClick={() => setSelected(office.id)}
                            key={key}
                            name={office.name}
                            schedule={`${office.opening_time} - ${office.closing_time}`} 
                            address={office.address}
                        />
                    )
                }) 
                ) : (
                    <div className="flex flex-row justify-center py-4 my-4 mt-10">
                        <Image src={notFound} alt="not found" />
                    </div>
                )
            }
            </div>

            <div className="hidden mt-10 md:relative md:flex md:w-full
            lg:hidden" 
            style={{height: "85vh", width:"100vw"}}>
                <Map element={element}/>
            </div>

            <div className="hidden mt-10 relative 
            lg:flex lg:w-6/12 lg:ml-5 lg:-top-44 
            xl:ml-5  xl:w-6/12 xl:-top-44" 
            style={{height: "100vh", width:"50vw"}}>
                <Map element={element}/>
            </div>
        </div>
    )
}

export default OfficeList;