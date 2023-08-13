import Navbar from "../../../Assets/Navbar";
import Projects from "../D2_Skeleton/D1_ProjectSection";
const D0_Projects = () =>{
    return(
        <>
            <div className={` h-100vh bg-black`}>
                <div>
                    <Navbar/>
                </div>
                <div className={`py-20`}>
                    <Projects/>
                </div>
            </div>

        </>
    )
}
export default D0_Projects;