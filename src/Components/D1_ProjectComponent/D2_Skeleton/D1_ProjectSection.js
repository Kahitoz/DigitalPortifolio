import { db } from "../../../Database/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const D1_ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const collecRef = collection(db, "Projects");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(collecRef);
        const sortedProjects = data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => a.a_index - b.a_index);
        setProjects(sortedProjects);
      } catch (error) {
        console.error("Firestore Error = ", error);
      }
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className={`bg-black py-1 px-4 sm:px-28 sm:py-2`}>
        <p
          className={`font-bold text-white mt-1 mb-4 text-2xl text-center sm:mt-2`}
        >
          Programs/Projects
        </p>
        <div>
          {projects.map((project) => {
            const redirect = () => {
              if (project.disabled === "false") {
                navigate(`/Projects/Info/${project.id}`, {
                  state: { project },
                });
              } else {
                window.alert("This blog is being written");
              }
            };
            return (
              <div className={`p-4`}>
                <div
                  className={`bg-gray-800 rounded-xl p-4 hover:cursor-pointer
                         hover:shadow-2xl hover:shadow-cyan-400 
                         hover:rounded-2xl hover:bg-gray-600 shadow-md 
                         shadow-cyan-400`}
                  onClick={redirect}
                >
                  <div className={`flex justify-between`}>
                    <p className={`text-white font-bold text-2xl`}>
                      {project.title}
                    </p>
                    <img
                      src={project.img0}
                      className={`w-16 h-16 rounded-full`}
                      alt={project.title}
                    />
                  </div>
                  <div>
                    <p className={`text-xl font-bold text-white text-center`}>
                      {project.short_desc}
                    </p>
                    <p
                      className={`text-md font-bold text-white text-center mt-4`}
                    >
                      Skills: {project.skills}
                    </p>
                  </div>
                  <div className={`mt-5 flex justify-between`}>
                    <p className={`text-sm font-bold text-white text-center`}>
                      From {project.start}
                    </p>
                    <p className={`text-sm font-bold text-white text-center`}>
                      Status: {project.status}
                    </p>
                    <p className={`text-sm font-bold text-white text-center`}>
                      To:{project.end}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default D1_ProjectSection;
