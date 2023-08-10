const D4_SkillHolder = ({image,title, value}) =>{
    return(
        <>
            <div className={`bg-gray-800 w-24 h-32 rounded-md hover:cursor-pointer shadow-md hover:shadow-2xl hover:shadow-cyan-400 shadow-cyan-400 flex flex-col justify-center items-center sm:w-48 sm:h-64`}>
                <img src={image} alt={title} className={`mx-auto w-4 h- sm:w-auto sm:h-auto`} />
                <p className={`text-white font-bold text-center text-xs`}>{title}</p>
                <div className="w-full mt-4 flex justify-evenly">
                    <label className="text-white w-2 ms-2 hover:z-10 mb-10 text-xs">Inter.</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={value}
                        disabled={true}
                        className="w-full"
                    />
                    <label className="text-white  me-3 mb-10 text-xs">Adv.</label>
                </div>
            </div>

        </>
    )
}
export default D4_SkillHolder;