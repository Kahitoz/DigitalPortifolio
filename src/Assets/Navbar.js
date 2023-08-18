import React, { useState } from "react";
import Button from "./Button";
import { D0_NavbarCSS } from "../Components/D0_DashboardComponent/D1_Skeleton/D0_NavbarCSS";

const Navbar = ({ tab }) => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Resume", link: "/Resume" },
    { name: "Projects", link: "/Projects" },
    { name: "Contact Me", link: "/ContactMe" },
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
                  <a
                    href={link.link}
                    className={`${D0_NavbarCSS.d7} ${
                      link.name === tab ? "text-cyan-400" : "text-white"
                    }`}
                  >
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
