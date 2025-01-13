function Projects() {
  return (
    <>
      <section id="projects" className="py-20 bg-black text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-extrabold text-white mb-6">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {[
              {
                name: "Udemy Clone",
                description:
                  "A responsive Udemy Clone website using React.js, HTML, CSS, and JavaScript, providing an intuitive and user-friendly platform for browsing courses. It features organized course categories, detailed course pages, and seamless interactions to enhance the overall learning experience.",
                color: "bg-[red]",
                demoLink: "https://mathankumarnagaraj.github.io/My-Udemy-clone-website/",
                githubLink: "https://github.com/MathankumarNagaraj/My-Udemy-clone-website",
              },
              {
                name: "Nostra: A Clothing Brand",
                description:
                  "An interactive e-commerce platform using HTML, CSS, and JavaScript, offering dynamic product search, filtering, and a visually appealing design. The website ensures a responsive and intuitive user experience across all devices",
                color: "bg-[blue]",
                demoLink: "https://mathankumarnagaraj.github.io/Nostra-website/",
                githubLink: "https://github.com/MathankumarNagaraj/Nostra-website",
              },
              {
                name: "Actodo: Task Management",
                description:
                  "A simple yet effective to-do list application with features like user authentication, task management, and a clean, intuitive interface. Built using React.js and Tailwind CSS, the website ensures a responsive and engaging experience across devices.",
                color: "bg-[orange]",
                demoLink: "https://actodo-pearl.vercel.app/",
                githubLink: "https://github.com/MathankumarNagaraj/actodo",
              },
              {
                name: "Weather App",
                description:
                  "Built a Weather App using React.js and Tailwind CSS, allowing users to check real-time weather updates with an intuitive and responsive interface. The app features location-based weather forecasts, temperature data, and weather conditions for a seamless user experience.",
                color: "bg-[#c4408c]",
                demoLink: "https://weather-app-five-eta-60.vercel.app/",
                githubLink: "https://github.com/MathankumarNagaraj/Weather-App",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`${project.color} p-6 rounded-lg text-white`}
              >
                <h4 className="text-xl font-bold mb-4">{project.name}</h4>
                <p className="mb-6">{project.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-white  text-[#34f17c] px-4 py-2 rounded-md font-medium transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-white  text-[#7839f6] px-4 py-2 rounded-md font-medium transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
