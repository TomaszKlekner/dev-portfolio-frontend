import { Link } from "react-router";

const Hero = ({
  name = "Tomasz",
  sentenceOne = "I'm a passionate front end developer, who loves to combine the art of design with the art of coding.",
  sentenceTwo = "Part of my job is to translate UI/UX designs into actual code that will produce visual elements of the application.",
  sentenceThree = "Creating innovative solutions to web design issues to help make websites and interfaces more visually appealing and enhance usability is what I love doing.",
}: {
  name?: string;
  sentenceOne?: string;
  sentenceTwo?: string;
  sentenceThree?: string;
}) => {
  return (
    <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-8">Hey, I'm {name} 👋</h2>
      {sentenceOne && (
        <p className="text-lg text-gray-300 max-w-6xl mx-auto mb-3">
          {sentenceOne}
        </p>
      )}
      {sentenceTwo && (
        <p className="text-lg text-gray-300 max-w-6xl mx-auto mb-3">
          {sentenceTwo}
        </p>
      )}
      {sentenceThree && (
        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
          {sentenceThree}
        </p>
      )}
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-blue-500 text-blue-400 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
