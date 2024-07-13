import Title from "../components/title";
import Lottie from "lottie-react";
import react from "../lotties/react.json";
import native from "../lotties/native.json";
import nodejs from "../lotties/node.json";
import mongo from "../lotties/mongo.json";
import html5 from "../lotties/1.json";
import figma from "../lotties/2.json";
import js from "../lotties/3.json";
const tech = [
  {
    name: "React",
    val: react,
  },
  {
    name: "React Native",
    val: native,
  },
  {
    name: "NodeJS",
    val: nodejs,
  },
  {
    name: "MongoDB",
    val: mongo,
  },
  {
    name: "HTML/CSS",
    val: html5,
  },
  {
    name: "Figma",
    val: figma,
  },
  {
    name: "JavaScript",
    val: js,
  },
];

function Technologies() {
  return (
    <div id="skills" className="h-full flex flex-col gap-1 p-2 text-white">
      <Title name="Technologies" />
      <div className="flex flex-wrap gap-5 justify-around">
        {tech.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <Lottie
              animationData={item.val}
              loop={true}
              className="h-20 md:h-36 lg:h-44"
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
