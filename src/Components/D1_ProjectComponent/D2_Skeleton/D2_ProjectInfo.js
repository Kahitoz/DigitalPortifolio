import Navbar from "../../../Assets/Navbar";
import ImageHolder from "./D3_ImageHolder";
import github from "../../D0_DashboardComponent/D2_Images/github.png";
import { useLocation } from "react-router-dom";
const D2_ProjectInfo = () => {
  const location = useLocation();
  const project = location.state.project;
  console.log(project.headings);

  const features = project.headings
    .filter((heading) => heading.startsWith("ft"))
    .map((heading, index) => ({
      title: project[heading],
      content: project[heading.replace("ft", "f")],
    }));

  const images = project.headings
    .filter((heading) => heading.startsWith("imgt"))
    .map((heading, index) => ({
      title: project[heading],
      content: project[heading.replace("imgt, img")],
    }));

  return (
    <div>
      <div className={`z-10`}>
        <Navbar tab="Projects" />
      </div>
      <div className={`flex flex-col ms-10`}>
        <div
          className={`flex items-center justify-center font-bold text-white z-1 mt-14 p-8`}
        >
          <img
            src={project.img0}
            className={`hover:cursor-pointer w-12 h-12 me-2`}
            alt={`github`}
          ></img>
          <p className="text-3xl font-bold">{project.title}</p>
        </div>
        <div
          className={`flex items-center justify-center font-bold text-white z-1`}
        >
          <p>View Project on-</p>
          <img
            src={github}
            className={`hover:cursor-pointer w-8 h-8 ms-2`}
            alt={`github`}
          ></img>
        </div>
        <div>
          <p className={`font-bold text-white text-xl mt-8`}>About Project</p>
        </div>
        <div>
          <p className={`font-bold text-white mt-2`}>{project.desc}</p>
        </div>
        {features.map((feature, index) => (
          <div key={index}>
            <p className={`font-bold text-white text-xl mt-8`}>
              {feature.title}
            </p>
            <div>
              <p className={`font-bold text-white mt-2`}>{feature.content}</p>
            </div>
          </div>
        ))}
        <div>
          <p
            className={`font-bold text-white text-xl sm:text-3xl mt-10 text-center`}
          >
            Project Images
          </p>
          <div className={`flex justify-center mt-10 items-center p-2`}>
            <div className={`grid grid-cols-2 gap-4 py-2 lg:grid-cols-3`}>
              {images.map((image, index) => (
                <div key={index}>
                  <ImageHolder image={image.content} title={image.title} />
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
