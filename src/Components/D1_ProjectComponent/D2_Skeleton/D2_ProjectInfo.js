import Navbar from "../../../Assets/Navbar";
import ImageHolder from "./D3_ImageHolder";
import github from "../../D0_DashboardComponent/D2_Images/github.png"
const D2_ProjectInfo = () => {
    const features = [
        { title: "Feature-1", content: "Info About Feature-1" },
        { title: "Feature-2", content: "Info About Feature-2" },
        { title: "Feature-3", content: "Info About Feature-3" },
    ];

    const images = [
        {title:"img-0", content:"link-1"},
        {title:"img-1", content:"link-2"},
        {title:"img-2", content:"link-3"},
    ];

    return (
        <div className={`h-vh sm:h-screen bg-black`}>
            <div className={`z-10`}>
                <Navbar />
            </div>
            <div className={`flex flex-col ms-10`}>
                <p className={`text-center text-white text-2xl font-bold mt-14 sm:text-4xl sm:mt-16`}>Project Title</p>
                <div className={`flex items-center justify-center font-bold text-white z-1`}>
                    <p>View Project on-</p>
                    <img
                        src={github}
                        className={`hover:cursor-pointer w-8 h-8 ms-2`}
                        alt={`github`}>
                    </img>
                </div>
                <div>
                    <p className={`font-bold text-white text-xl mt-8`}>About Project</p>
                </div>
                <div>
                    <p className={`font-bold text-white mt-2`}>Info About the project goes here</p>
                </div>
                {features.map((feature, index) => (
                    <div key={index}>
                        <p className={`font-bold text-white text-xl mt-8`}>{feature.title}</p>
                        <div>
                            <p className={`font-bold text-white mt-2`}>{feature.content}</p>
                        </div>
                    </div>
                ))}
                <div>
                    <p className={`font-bold text-white text-xl sm:text-3xl mt-10 text-center`}>Project Images</p>
                    <div className={`flex justify-center bg-black mt-10 items-center p-2`}>
                        <div className={`grid grid-cols-2 gap-4 py-2 lg:grid-cols-3`}>
                            {images.map((image, index) => (
                                <div key={index}>
                                    <ImageHolder image={github} title={`github`}/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default D2_ProjectInfo;
