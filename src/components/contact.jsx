import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from "react";

function Contact() {
    const [showArrow, setShowArrow] = useState(false);

    // Show or hide the arrow based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById("home");
            const homeHeight = homeSection.offsetHeight;
            setShowArrow(window.scrollY > homeHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section id="contact" className="py-20 bg-black text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-4xl font-extrabold text-white mb-6">Contact Me</h3>
                    <p className=" hover:text-[#40bdc4] text-lg text-gray-300 mb-6">"I'm always excited to explore new ideas, discuss emerging trends, and collaborate on innovative projects! Whether you’re looking to share insights, seek advice, or brainstorm solutions in the world of web development and tech, I’d love to connect. Feel free to reach out—let’s chat, collaborate, and keep pushing the boundaries of what's possible in this ever-evolving field!" I’m eager to connect. Feel free to reach out if you're interested in sharing insights, brainstorming ideas, or just having a chat about the ever-evolving world of web development and tech!</p>
                    <div className="flex justify-center gap-6 mb-6">
                        <a href="https://github.com/MathankumarNagaraj" className="text-3xl text-white hover:text-[#40bdc4] transition duration-300">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mathankumar-n-4483442b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-3xl text-white hover:text-[#40c4b2] transition duration-300">
                            <FaLinkedin />
                        </a>
                    </div>
                    <br></br>
                    <a href="https://www.instagram.com/mass.mk.372?igsh=MTdtMXVrMmdzaHF4Yg==" className="bg-[#40b7c4] text-black py-3 px-6 rounded-full text-xl hover:bg-[#3955f6] transition duration-300 transform hover:scale-105">
                        Get in Touch
                    </a>
                     {/* Up Arrow Button */}
                {showArrow && (
                    <a
                        href="#home"
                        className="fixed bottom-6 right-4 bg-[#40aec4] text-black p-3 rounded-full shadow-lg hover:bg-[#5c39f6] transition duration-300 transform hover:scale-110"
                        title="Back to Top"
                    >
                        <FaArrowUp className="text-2xl" />
                    </a>
                )}
                </div>
            </section>
        </>
    );
}

export default Contact;
