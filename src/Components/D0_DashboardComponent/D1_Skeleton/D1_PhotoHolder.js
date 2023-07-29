import myPhoto from "../D2_Images/ProfilePhoto.jpg"
const D1_PhotoHolder = () =>{
    return(
        <>
            <div className="mt-20 ">
                <img
                    src={myPhoto}
                    alt="Kshitiz Sinha Profile Photo"
                    className="rounded-full w-64 h-64 xl:w-96 lg:h-96 mt-10"
                />
            </div>

        </>
    );
}
export default D1_PhotoHolder;