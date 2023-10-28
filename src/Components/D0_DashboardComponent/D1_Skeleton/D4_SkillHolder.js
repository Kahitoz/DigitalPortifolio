const D4_SkillHolder = ({ image, title, value }) => {
  return (
    <>
      <div
        className={`bg-gray-800 w-24 h-32 rounded-md hover:cursor-pointer shadow-md hover:shadow-2xl hover:shadow-cyan-400 shadow-cyan-400 flex flex-col justify-center items-center sm:w-48 sm:h-64 hover:bg-gray-600`}
      >
        <img
          src={image}
          alt={title}
          className={`mx-auto w-4 h- sm:w-auto sm:h-auto`}
        />
        <p className={`text-white font-bold text-center text-xs`}>{title}</p>
        <div className="w-full mt-4 flex justify-evenly flex-col sm:flex-row">
          <label className="text-white w-2 ms-2 hover:z-10 mb-10 text-xs sm:block hidden">
            Inter.
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            disabled={true}
            className={`sm:w-full w-4 hidden sm:block`}
          />
          <p className={`text-white text-center text-xs sm:hidden block`}>Rating</p>
          <p className={`text-white text-xs w-full text-center font-bold sm:hidden visible`}>{value}/100</p>{" "}
          {/* Show value on smaller screens */}
          <label className="text-white  me-3 mb-10 text-xs sm:block hidden">
            Adv.
          </label>
        </div>
      </div>
    </>
  );
};

export default D4_SkillHolder;
