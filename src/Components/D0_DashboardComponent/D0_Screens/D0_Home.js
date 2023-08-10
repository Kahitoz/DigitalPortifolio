import React from "react";
import Navbar from "../D1_Skeleton/D0_Navbar";
import Title from "../D1_Skeleton/D2_TitleHolder"
import MyPhoto from "../D1_Skeleton/D1_PhotoHolder"
import ContactBar from "../D1_Skeleton/D3_ContactBar";
const Home = () =>{
    return (
        <>
            <div className="bg-black h-100vh sm:h-screen flex flex-col">
                <div className={`z-10`}>
                    <Navbar />
                </div>

                <div className={`flex p-10 flex-col-reverse sm:flex-row sm:justify-center`}>
                    <div className="mt-5 px-10 py-5 sm:py-14 text-white">
                        <Title />
                    </div>

                    <div className=" mt-5 flex self-center ">
                        <MyPhoto />
                    </div>
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