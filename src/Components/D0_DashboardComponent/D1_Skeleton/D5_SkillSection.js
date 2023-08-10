import SkillHolder from "./D4_SkillHolder";
import java from "../D2_Images/java.png"
import python from "../D2_Images/python.png"
import js from "../D2_Images/javascript.png"
import react from "../D2_Images/React.png"
import android from "../D2_Images/android.png"
import sql from "../D2_Images/sql-server.png"
import express from "../D2_Images/node-js.png"
import tailwind from "../D2_Images/tailwind.png"
import css from "../D2_Images/css.png"
import blender from "../D2_Images/Blender.png"
import figma from "../D2_Images/figma.png"
import xd from "../D2_Images/xd.png"

const D5_SkillSection = ()=>{
    return(
        <>
            <div className={`bg-black`}>
            <p className={`text-center font-bold text-xl text-white mb-4 sm:text-4xl`}> Programming/Development Skills</p>
            <div className={`flex justify-center bg-black`}>
                <div className="grid grid-cols-3 gap-4">
                    <SkillHolder image={java} title="Java" value={95} />
                    <SkillHolder image={python} title="Python" value={75} />
                    <SkillHolder image={js} title="Java Script" value={85} />
                    <SkillHolder image={react} title="React" value={95} />
                    <SkillHolder image={express} title="Node/Express" value={65} />
                    <SkillHolder image={tailwind} title="Tailwind" value={75} />
                    <SkillHolder image={css} title="CSS" value={75} />
                    <SkillHolder image={android} title="Android" value={90} />
                    <SkillHolder image={sql} title="MS SQL" value={85} />
                </div>
            </div>

            <p className={`text-center font-bold text-xl text-white mb-4 mt-4 sm:text-4xl`}> UI/Modelling</p>
            <div className={`flex justify-center bg-black`}>
                <div className="grid grid-cols-3 gap-4">
                    <SkillHolder image={figma} title="Figma" value={65} />
                    <SkillHolder image={xd} title="XD" value={35} />
                    <SkillHolder image={blender} title="Blender" value={25} />

                </div>
            </div>

            </div>
        </>
    )
}
export default D5_SkillSection;