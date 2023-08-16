import Navbar from "../../Assets/Navbar";
import { db } from "../../Database/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
const D0_Resume = () => {
  const [detailedPdfUrl, setDetailedPdfUrl] = useState("");
  const [shortPdfUrl, setShortPdfUrl] = useState("");

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const collecRef = collection(db, "Info");
        const data = await getDocs(collecRef);
        const resumeInfo = data.docs.find((doc) => doc.id === "Resume")?.data();
        if (resumeInfo) {
          setDetailedPdfUrl(resumeInfo.detailed || "");
          setShortPdfUrl(resumeInfo.short || "");
        }
      } catch (error) {
        console.error("Firestore Error =", error);
      }
    };
    fetchResumeData();
  }, []);

  const redirectToDetailedPdf = () => {
    if (detailedPdfUrl) {
      window.location.href = detailedPdfUrl;
    }
  };

  const redirectToShortPdf = () => {
    if (shortPdfUrl) {
      window.location.href = shortPdfUrl;
    }
  };
  return (
    <>
      <div>
        <Navbar tab="Resume" />
      </div>
      <div className="flex flex-col p-2 justify-center mt-24 sm:flex-row">
        <div
          className={`inline-block text-center bg-blue-700 p-3 sm:p-6 rounded-xl hover:cursor-pointer hover:bg-blue-500`}
          onClick={redirectToShortPdf}
        >
          <p className="text-white font-bold">Download Short Resume</p>
        </div>
        <div
          className={`inline-block text-center bg-blue-700 p-3 sm:p-6 rounded-xl hover:cursor-pointer hover:bg-blue-500 ms-0 mt-2 sm:mt-0 sm:ms-3`}
          onClick={redirectToDetailedPdf}
        >
          <p className="text-white font-bold">Download Detailed Resume</p>
        </div>
      </div>
      <div className="p-4 mt-8">
        <p className="text-white font-bold text-xl">
          Software Engineer/Developer CV - Kshitiz Sinha
        </p>

        <p className="text-white mt-2 font-bold">
          As an accomplished computer science student, I possess a diverse skill
          set encompassing various technologies and platforms. From Android app
          development using Java to web development with HTML, CSS, JS, Node,
          and React, I've cultivated proficiency across the spectrum. My
          expertise extends to 3D modeling using Blender and hands-on experience
          with NoSQL databases like MongoDB and Firebase Firestore.
        </p>

        <p className="text-white mt-2 font-bold">
          I've successfully engaged with SQL databases, including MSSQL and
          MySQL, and demonstrated strong programming abilities in Java and
          Python. My passion for staying abreast of technological advancements
          fuels my continuous learning journey, allowing me to apply new skills
          creatively. My meticulous problem-solving aptitude ensures
          high-quality work, and I'm equally adept at both independent work and
          collaborative team efforts.
        </p>

        <p className="text-white mt-2 font-bold">
          My project highlights include creating a prototype nano-particle
          printer for the NANO EPL competition, a moving average graph plotter,
          and an Android discussion forum app. I've also built apps for
          Arduino-based smart appliances, a real-time messaging app called
          Discepto, and more. My prowess ranges from compiler design algorithms
          and packet simulation to creating GUI applications for database
          operations.
        </p>

        <p className="text-white mt-2 font-bold">
          My journey remains dynamic, evidenced by ongoing projects such as
          upgrading a university gate-pass website to Node and React, and
          exploring Natural Language Processing for search prediction.
        </p>

        <p className="text-white mt-2 font-bold">
          I'm driven by challenges, eager to contribute to innovative projects
          in the realm of computer science, and committed to my professional
          growth.
        </p>

        <p className="text-white mt-2 font-bold">
          Feel free to reach out to discuss my projects or skills further. Thank
          you for reviewing my CV.
        </p>

        <p className="text-white font-bold mt-2 font-bold">
          Best regards,
          <br />
          Kshitiz Sinha
        </p>
      </div>
    </>
  );
};
export default D0_Resume;
