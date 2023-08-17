import {useState} from "react";
import Navbar from "../../Assets/Navbar";

const D0_ContactMe = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [purpose, setPurpose] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [color, setColor] = useState("green-400")
    return(
        <>
            <div>
                <div>
                    <Navbar tab={`Contact Me`}/>
                </div>
                <div className={`flex justify-center items-center h-vh sm:h-screen`}>
                    <div className={`mt-20 inline-block sm:w-6/12 p-3 sm:p-8 bg-gray-900 rounded-md  shadow-xl shadow-cyan-400 hover:shadow-2xl hover:shadow-cyan-400`}>
                        <div className={`mb-4 flex justify-center text-white font-bold text-md sm:text-2xl`}>
                            Message Me
                        </div>
                        <div className={`mt-2`}>
                            <p className={`text-white font-bold px-2`}>Name</p>
                            <input
                                className={`text-white bg-black px-3 py-1 rounded-full mt-2 sm:w-full`}
                                onChange={event => setName(event.target.value)}
                                value={name}
                                placeholder={`Enter your name`}/>
                        </div>
                        <div className={`mt-2`}>
                            <p className={`text-white font-bold px-2`}>Email</p>
                            <input
                                className={`text-white bg-black px-3 py-1 rounded-full mt-2 sm:w-full`}
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                                type={`email`}
                                placeholder={`Your email please`}/>
                        </div>
                        <div className={`mt-2`}>
                            <p className={`text-white font-bold px-2`}>Purpose</p>
                            <input
                                className={`text-white bg-black px-3 py-1 rounded-full mt-2 sm:w-full`}
                                onChange={event => setPurpose(event.target.value)}
                                value={purpose}
                                placeholder={`What's the purpose`}/>
                        </div>
                        <div className={`mt-2`}>
                            <p className={`text-white font-bold px-2`}>Message</p>
                            <input
                                className={`text-white bg-black px-3 py-1 rounded-full mt-2 sm:w-full`}
                                onChange={event => setMessage(event.target.value)}
                                value={message}
                                placeholder={`Let's talk`}/>
                        </div>
                        <div className={`mt-4 flex justify-center`}>
                            <div className={`bg-blue-500 inline-block px-2 py-1 rounded-md text-white sm:text-xl text-md text-center hover:cursor-pointer hover:bg-blue-700`}>
                                Send
                            </div>
                        </div>
                        <div className={`mt-4 flex justify-center text-white font-bold`}>
                                Or
                        </div>
                        <div className={`mt-4 flex justify-center`}>
                            <a href="mailto:kshitiz.sinha.025@gmail.com">
                                <div className={`bg-blue-500 inline-block px-2 py-1 rounded-md text-white sm:text-xl text-center hover:cursor-pointer hover:bg-blue-700`}>
                                    Write an Email
                                </div>
                            </a>
                        </div>
                        <div className={`mt-4 flex justify-center text-${color} font-bold`}>
                            {status}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default D0_ContactMe;