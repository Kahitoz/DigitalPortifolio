import discord from "../D2_Images/discord.png";
import linkedin from "../D2_Images/linkedin.png";
import github from "../D2_Images/github.png";
import twitter from "../D2_Images/twitter.png";
import React from "react";

const D3_ContactBar = () => {
  return (
    <>
      <div className={`flex justify-center rounded-full p-2`}>
        <p className=" border-t border-gray-400 my-4 w-96"></p>
      </div>

      <p className={`text-white text-center text-2xl mb-2`}> View my profile</p>
      <div>
        <div className={`flex justify-center rounded-full p-2`}>
          <a href={`https://github.com/Kahitoz/`}>
            <img
              src={github}
              alt={`github`}
              className={`hover:cursor-pointer me-3 w-12 h-12 sm:w-auto sm:h-auto`}
            ></img>
          </a>
          <a href={`https://www.linkedin.com/in/kahitoz/`}>
            <img
              src={linkedin}
              alt={`linkedin`}
              className={`hover:cursor-pointer me-3 w-12 h-12 sm:w-auto sm:h-auto`}
            ></img>
          </a>
          <a href={`https://discord.gg/zzabbCEFyX`}>
            <img
              src={discord}
              alt={`discord`}
              className={`hover:cursor-pointer me-3 w-12 h-12 sm:w-auto sm:h-auto`}
            ></img>
          </a>

          <a href={`https://twitter.com/Kahitoz`}>
            <img
              src={twitter}
              alt={`twitter`}
              className={`hover:cursor-pointer  w-12 h-12 sm:w-auto sm:h-auto`}
            ></img>
          </a>
        </div>
      </div>
    </>
  );
};
export default D3_ContactBar;
