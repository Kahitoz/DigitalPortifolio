import hand1 from "../D2_Images/wave.png";
const D2_TitleHolder = () => {
  return (
    <>
      <div className={`flex flex-col sm:flex-row`}>
        <div className="text-5xl sm:text-7xl">
          <h1>Hi there,</h1>
          <h1>I'm</h1>
          <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Kshitiz Sinha
          </p>
        </div>
        <img
          src={hand1}
          alt={"hand 1"}
          className={`ms-5 hover:cursor-pointer animate-bounce w-16 h-16 mt-10 sm:mt-0 sm:w-32 sm:h-32`}
        ></img>
      </div>
    </>
  );
};

export default D2_TitleHolder;
