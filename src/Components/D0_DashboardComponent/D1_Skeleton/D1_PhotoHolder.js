import myPhoto from "../D2_Images/ProfilePhoto.png"
const D1_PhotoHolder = () =>{
    return(
        <>
            <div >
                <img
                    src={myPhoto}
                    alt="Kshitiz Sinha Profile Photo"
                    className={`rounded-full border-black border-2 hover:cursor-pointer hover:border-pink-950 w-64 h-64 transition-transform transform hover:scale-105`}
                />

            </div>

        </>
    );
}
export default D1_PhotoHolder;