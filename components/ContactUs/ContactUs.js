import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'



import formSended from '../../assets/icons/formSended.svg'

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sended, setSended] = useState(false);

    
    async function SendMessage () {
        const jsonObject = {
            "name" : name,
            "email": email,
            "message": message
        }

        try{
            const response = await fetch("https://api.elaniin.dev/api/contact", {
                method: "POST",
                body: JSON.stringify(jsonObject),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    }
                }
            );
            

        const json = await response.json();

        console.log(json);

        setSended(!sended)

        } catch (e){
            console.log(e);
            alert("Something went wrong")
        }
    }

    return(
        <div id="contact" className="text-white bg-black py-48  lg:pt-24"> 
            {
                !sended ? (
                <div className="md:mx-10">
                    <h3 className="pt-12 pb-5 text-4xl font-druk-bold text-center">Cuentanos tu experiencia</h3>
                    <p className="pb-10 px-10 leading-5 text-gray-200 text-center xl:text-2xl">Dont miss out our great offers & receive deals from all our top
                    restaurant via e-mail
                    </p>

                    <form className="flex flex-col"
                    onSubmit={(e) => {
                        e.preventDefault();
                        SendMessage();
                    }}>

                        <div className="lg:flex lg:flex-row lg:justify-center lg:w-full"> 
                            <div className="lg:w-6/12 lg:ml-32">
                                <label className="flex flex-col ml-5 text-xs xl:text-lg"> <p className="lg:ml-16">Nombre y Apellido</p>
                                    <input className="mr-5 mt-1 mb-2 py-3 pl-3 bg-transparent border border-gray-400 rounded-sm lg:mx-16 lg:py-4
                                    xl:w-8/12 "
                                        id="name"
                                        value={name}
                                        maxLength="191"
                                        onChange={(e) => setName(e.target.value)}/>
                                </label>

                                <label className="flex flex-col ml-5 text-xs xl:text-lg"> <p className="lg:ml-16">Correo electrónico</p>
                                    <input className="mr-5 mt-1 mb-2 py-3 pl-4 bg-transparent border border-gray-400 rounded-sm lg:mx-16 lg:py-4 
                                    xl:w-8/12 xl:text-lg"
                                        placeholder="j.doe@correo.com"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                </label>
                            </div>

                            <div className="lg:w-6/12 lg:mr-32">    
                                <label className="flex flex-col text-xs xl:text-lg xl:-ml-20"> Mensaje
                                    <textarea className="mr-5 mb-2 pl-4 pt-2 pr-2 h-28 bg-transparent border border-gray-400 rounded-sm
                                    xl:h-40 xl:text-lg"
                                        placeholder="El dia de ahora mi experiencia fue..."
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        maxLength="255"/>
                                </label>

                                <div className="flex flex-col items-center my-5 lg:items-end lg:mr-5">
                                    <button className="w-7/12 py-3 px-3 font-bold text-black bg-yellow-400 rounded-md md:w-3/12
                                    hover:bg-yellow-200 xl:w-48"
                                        type="submit">
                                            Enviar comentarios
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                ) : 
                (
                    <div className="flex flex-col h-screen justify-center items-center align-baseline mx-5 pb-20">
                        <div className="pb-14">
                            <Image src={formSended} alt="form"/>
                        </div>
                        <p className="font-druk-bold text-3xl text-center mb-5">Gracias por tus comentarios</p>
                        <p className="mb-8"> Dont miss out our great offers & receive deals from all our top
                        restaurant via e-mail</p>
                        <button className="bg-yellow-400 p-3 rounded-sm text-lg font-bold text-black">
                                <Link href="/menu"> Conoce nuestro menu </Link>
                            </button>
                    </div> 
                )
            }
            
        </div>
    )
}

export default ContactUs;