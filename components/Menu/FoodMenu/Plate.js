import Image from 'next/image'

const Plate = ({image, name, description, category, price}) => {
    return(
        <div>
            <div className="mx-10 pb-5 flex flex-col mt-5 px-5 
            hover:shadow-lg transform hover:scale-125 transition duration-300 cursor-pointer">
                <p className="font-syne-bold text-2xl">{name}</p>
                <p className="text-xs my-5">{description}</p>
                <div className="flex flex-row justify-between">
                    <p className="text-sm text-gray-400">{category}</p>
                    <div className="bg-yellow-400 rounded-lg py-1 px-2 mr-2">
                        <p className="font-druk-bold text-xs">{price}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Plate;