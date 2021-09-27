const Card = ({name, schedule, address, onClick, styleRule}) => {
    return (
    <div onClick={onClick}> 
        <div className={styleRule}>
        <h4 className="font-syne-bold xl:text-3xl">{name}</h4>
            <div className="text-xs mt-2 font-semibold xl:text-xl">
                <p>{schedule}</p>
                <p>{address}</p>
            </div>
        </div>
    </div>
    )
}

export default Card;