const D3_ImageHolder = ({ image, title }) => {
  return (
    <div
      className={`bg-gray-800 w-32 h-32 rounded-md hover:cursor-pointer shadow-md hover:shadow-2xl hover:shadow-cyan-400 shadow-cyan-400 flex flex-col justify-center items-center sm:w-64 sm:h-64 hover:bg-gray-600`}
    >
      <img
        src={image}
        alt={title}
        className={`mx-auto w-20 h-20 sm:w-48 sm:h-48`}
      />
      <p className={`text-white font-bold text-center text-xs mt-0 sm:mt-4`}>
        {title}
      </p>
      <div className="w-full mt-4 flex justify-evenly"></div>
    </div>
  );
};
export default D3_ImageHolder;
