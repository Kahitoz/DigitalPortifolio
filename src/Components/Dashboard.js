import React, { useEffect, useState } from "react";
import Navbar from "../Utilities/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Database/firebase";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const dataCollectionReference = collection(db, "Dashboard");

  useEffect(() => {
    const getTitle = async () => {
      const datas = await getDocs(dataCollectionReference);
      console.log(datas)
      setData(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })).reverse());
    };
    getTitle();
  });
  return (
    
    <div className="bg-black ">
      <Navbar />
      <div className="mt-5 px-10 py-14  text-white">
        <div className="text-7xl mt-20 py-10">
        <h1>Hi there,</h1>
        <h1>I'm</h1>
        <p class="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Kshitiz Sinha</p>
        </div>

        <div >
<div className="bg-black px-10 py-10 mt-10 md:px-0 md:py-20">
  {data.map((data) => {
    return (
      <div className="bg-gray-900 px-10 py-10 mt-20 rounded-3xl">
        <div>
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="mt-10">{data.description}</p>
        </div>
      </div>
    );
  })}
</div>


        </div>
     
      </div>
    </div>
  );
};

export default Dashboard;
