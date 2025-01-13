function Skills() {
  return (
    <>
      <section id="skills" className="py-20 bg-black text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-extrabold text-white mb-6">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {[
              { name: "HTML", img: "https://img.icons8.com/color/452/html-5.png" },
              { name: "CSS", img: "https://img.icons8.com/color/452/css3.png" },
              { name: "JavaScript", img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
              { name: "Tailwind CSS", img: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=FFFFFF" },
              { name: "React.js", img: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000" },
              { name: "Node.js", img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
              { name: "Express.js", img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF" },
              { name: "MongoDB", img: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=FFFFFF" },
              { name: "Git", img: "https://img.icons8.com/color/452/git.png" },
              { name: "Firebase", img: "https://img.icons8.com/color/452/firebase.png" },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-4  rounded-lg text-center transform hover:scale-105 hover:shadow-lg transition duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 mx-auto mb-3"
                />
                <p className="text-lg text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
