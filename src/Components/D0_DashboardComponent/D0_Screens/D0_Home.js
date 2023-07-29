import React from "react";
import Navbar from "../D1_Skeleton/D0_Navbar";
import Title from "../D1_Skeleton/D2_TitleHolder"
import MyPhoto from "../D1_Skeleton/D1_PhotoHolder"
const Home = () =>{
    return (
        <>
            <div className="bg-black h-100vh sm:h-screen flex flex-col">
                <div>
                    <Navbar />
                </div>
                <div className="flex flex-1 items-center flex-col-reverse sm:flex-row">

                    <div className="mt-5 px-10 py-5 sm:py-14 flex-1 text-white self-start">
                        <Title />
                    </div>

                    <div className="flex-1 flex self-center sm:self-start">
                        <MyPhoto />
                    </div>
                </div>
            </div>
        </>
    );

}
export default Home;