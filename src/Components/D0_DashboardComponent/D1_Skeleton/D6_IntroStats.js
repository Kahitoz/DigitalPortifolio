const D6_IntroStats = () =>{
    return(
        <>
            <div className={`bg-black`}>
                <div className="ms-8 mt-4 flex flex-col justify-center">
                    <p className="text-white font-bold text-2xl mb-4">About Myself</p>
                    <p className="text-white font-bold">
                        Hi, I'm Kshitiz Sinha, a Computer Science Engineering student at NIIT University. My focus areas are Full Stack Development and Artificial Intelligence, particularly in Natural Language Processing (NLP).
                    </p>
                    <p className="text-white font-bold">
                        Proficient in Java, Python, React, Figma, and Tailwind, I've worked on diverse projects. As an intern, I streamlined the university gatepass system, ensuring better security and convenience.
                    </p>
                    <p className="text-white font-bold">
                        I also developed an Android app using Java and Android Studio. Additionally, I created an HR app that simplified teacher hiring.
                    </p>
                    <p className="text-white font-bold">
                        Looking ahead, I'm passionate about becoming an AI/ML engineer, leveraging cutting-edge technologies for positive societal impact. I'm excited to explore new challenges and contribute to innovative AI projects.
                    </p>
                </div>
                <p className="text-white font-bold text-2xl mb-4 ms-8 mt-4">My GitHub Stats</p>
                <div className=" ms-2 mt-4 flex flex-col sm:flex-row justify-center">
                    <img src="https://github-readme-stats.vercel.app/api?username=Kahitoz&theme=dark&hide_border=false&include_all_commits=all&count_private=false" alt="GitHub Stats" className="mb-4"></img>
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=Kahitoz&theme=dark&hide_border=false" alt="GitHub Streak" className="mb-4"></img>
                </div>
                <div className={`flex justify-center`}>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kahitoz&theme=dark&hide_border=false&include_all_commits=true&count_private=false&layout=compact" alt="Top Languages" className="mb-4"></img>
                </div>

            </div>
        </>
    )
}
export default D6_IntroStats