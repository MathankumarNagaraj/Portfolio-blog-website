import instagram from "../assets/instagram.png"
function Hero() {
    return (
        <>
            <section id="home" className="h-screen bg-black flex items-center justify-center text-center fadeInUp px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 max-w-3xl mx-auto">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        
                        
                        <img 
                            src={instagram} // Replace this with your image URL
                            alt=""
                            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 border-4 border-[#40c4c4] mb-1" // Styling for the image
                        />
                    </div>

                    {/* Name and Title */}
                    <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[rgb(64,192,196)] via-[#3476f1] to-[#39f6d0] bg-clip-text text-transparent">
                        <span className="bg-white bg-clip-text text-transparent">Hi, I'm</span> Mathankumar.N
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold">
                        <span className="text-4xl font-extrabold bg-[#40c4c4] bg-clip-text text-transparent">MERN</span> FullStack Developer
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-white opacity-80 px-5 sm:px-8">
                        I am a passionate MERN Fullstack developer dedicated to building innovative and impactful web solutions. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on crafting dynamic, responsive, and user-centric applications. My goal is to deliver seamless digital experiences while continuously learning and adapting to emerging web technologies.
                    </p>

                    {/* Resume Button */}
                    <a 
                        href="https://drive.google.com/file/d/1icVNZv24mZ6fjs4SEzHMBMr1Rfr3B82q/view?usp=drivesdk" 
                        className="inline-block bg-[#40b7c4] text-black py-3 px-6 rounded-full text-lg sm:text-xl hover:bg-[#393cf6] transition duration-300 transform hover:scale-105"
                        aria-label="View my resume"
                    >
                        Explore My Resume
                    </a>
                </div>
            </section>
        </>
    );
}

export default Hero;
