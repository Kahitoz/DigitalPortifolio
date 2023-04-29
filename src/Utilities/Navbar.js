import React, {useState} from "react";
import Button from "../Assets/Button";

const Navbar = () => {

    let Links = [
        {name:"Home", link:"/"},
        {name:"Cv", link:"/"},
        {name:"Projects", link:"/"},
        {name:"Conatct Me", link:"/"},
    ]

    let [open, setOpen] = useState(false);
    return(
        <div>
           <div className="shadow-md w-full fixed top-0 left-0">
            <div className = "md:flex items-center justify-between px-4 bg-black py-4 text-white font-bold">
                <div className="font-bold text-white px-7 cursor-pointer flex items-center  hover:text-gray-400 duration-200">
                    Hi, I am Kshitiz Sinha
                </div>

                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden">
                <ion-icon name="grid-outline"></ion-icon>
              
                </div>
                
                      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-11 transition-all duration-500 ease-in ${open ? 'top-10':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                            <li key ={link.name} className="md:ml-8 md:my-0 my-7">
                                <a href = {link.link} className="text-white hover:text-gray-400 duration-200">{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>Switch</Button>
                </ul>
               
            </div>
           </div>
        </div>
    );
}
export default Navbar;