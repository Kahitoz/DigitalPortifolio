import React from "react";
import Navbar from "../../../Assets/Navbar";
import Title from "../D1_Skeleton/D2_TitleHolder"
import MyPhoto from "../D1_Skeleton/D1_PhotoHolder"
import ContactBar from "../D1_Skeleton/D3_ContactBar";
import SkillSection from "../D1_Skeleton/D5_SkillSection";
import IntroStats from "../D1_Skeleton/D6_IntroStats";
const Home = () =>{
    return (
        <>
            <div className="bg-black h-100vh sm:h-screen flex flex-col">
                <div className={`z-10`}>
                    <Navbar tab="Home"/>
                </div>

                <div className={`flex p-10 flex-col-reverse sm:flex-row sm:justify-center`}>
                    <div className="mt-5 px-10 py-5 sm:py-14 text-white">
                        <Title />
                    </div>

                    <div className=" mt-5 flex self-center ">
                        <MyPhoto />
                    </div>
                </div>
                <SkillSection/>
                <div className={`bg-black`}>
                    <IntroStats/>
                </div>
                <div className={`bg-black`}>
                    <div>
                        <ContactBar/>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Home;