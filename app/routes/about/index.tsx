const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, I'm Tomek 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a passionate developer, who loves to combine the art of design
            with the art of coding.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Career</h2>
        <p className="text-gray-300 leading-relaxed">
          Part of my job is to translate UI/UX designs into actual code that
          will produce visual elements of the application. Creating innovative
          solutions to web design issues to help make websites and interfaces
          more visually appealing and enhance usability is what I love doing.
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Tech I Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          "JavaScript",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Laravel",
          "Prisma",
          "MongoDB",
          "Postgre/PostgreSQL",
          "Docker",
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
