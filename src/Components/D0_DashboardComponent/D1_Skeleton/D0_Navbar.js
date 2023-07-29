import React, { useState } from "react";
import Button from "../../../Assets/Button";
import { D0_NavbarCSS } from "./D0_NavbarCSS";

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Cv", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Conatct Me", link: "/" },
    ];

    let [open, setOpen] = useState(false);
    return (
        <body className="bg-black">
        <div>
            <div className={`${D0_NavbarCSS.d1}`}>
                <div className={`${D0_NavbarCSS.d2}`}>
                    <div className={`${D0_NavbarCSS.d3}`}>Welcome</div>
                    <div
                        onClick={() => setOpen(!open)}
                        className={`${D0_NavbarCSS.d4}`}
                    >
                        <ion-icon name="grid-outline"></ion-icon>
                    </div>
                    <ul
                        className={`${D0_NavbarCSS.d5} ${
                            open ? "top-10" : "top-[-490px]"
                        }`}
                    >
                        {Links.map((link) => (
                            <li key={link.name} className={`${D0_NavbarCSS.d6}`}>
                                <a href={link.link} className={`${D0_NavbarCSS.d7}`}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <Button>Switch</Button>
                    </ul>
                </div>
            </div>
        </div>
        </body>
    );
};

export default Navbar;
