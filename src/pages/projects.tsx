import Title from "../components/title";
import { useEffect, useState } from "react";
import {
  appProjects,
  COLORS,
  uiProjects,
  webProjects,
} from "../constants/constant";
import { motion } from "framer-motion";
const tabs: string[] = ["Web", "App", "UI/UX"];

export type ProjectType = {
  id: number;
  name: string;
  desc: string;
  img: string;
  link: string;
};
function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentArray, setCurrentArray] = useState<ProjectType[]>(webProjects);

  useEffect(() => {
    setCurrentArray([]);
    setTimeout(() => {
      setCurrentArray(
        activeTab === 0
          ? webProjects
          : activeTab === 1
          ? appProjects
          : uiProjects
      );
    }, 500);
  }, [activeTab]);
  return (
    <div id="projects" className="h-full flex flex-col gap-1 p-2">
      <Title name="Projects" />
      <div className="flex flex-col-reverse h-full gap-3 justify-center">
        {/* Selector */}
        <div className="join flex self-center">
          {tabs.map((item, idx) => (
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 * idx }}
              onClick={() => {
                setActiveTab(idx);
              }}
              className="btn join-item text-white"
              style={{
                backgroundColor:
                  activeTab === idx ? COLORS.DARKBLUE : COLORS.BLUE,
                color: activeTab === idx ? COLORS.GREEN : "white",
              }}
            >
              {item}
            </motion.button>
          ))}
        </div>
        {/* Description */}
        <div className="flex justify-center p-2">
          <div className="carousel rounded-box space-x-3">
            {currentArray.length === 0
              ? [1, 1, 1].map(() => <LoadingCarousel />)
              : currentArray.map((item, idx) => (
                  <CarouselItem item={item} idx={idx} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;

const CarouselItem = ({ item, idx }: { item: ProjectType; idx: number }) => {
  return (
    <motion.div
      className="carousel-item"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: idx * 0.2 }}
    >
      <div className="card bg-base-100 image-full w-80 h-56 shadow-xl">
        <figure>
          <img src={item.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title" style={{ color: COLORS.GREEN }}>
            <span className="" style={{ color: COLORS.RED }}>
              {idx + 1}.
            </span>
            {item.name}
          </h2>
          <p className=" text-xs">{item.desc}</p>
          <div className="flex justify-end">
            <a
              style={{ backgroundColor: COLORS.GREEN }}
              className="btn btn-sm"
              target="_blank"
              href={item.link}
            >
              Explore
            </a>
          </div>
        </div>
      </div>{" "}
    </motion.div>
  );
};
const LoadingCarousel = () => {
  return (
    <motion.div
      className="carousel-item"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="card bg-base-100 image-full w-80 h-56 shadow-xl">
        <div className="card-body">
          <h2
            className="card-title skeleton h-8 w-60"
            style={{ color: COLORS.GREEN }}
          ></h2>
          <div className="flex flex-col gap-2 mt-2">
            <div className=" skeleton h-4 w-48"></div>
            <div className=" skeleton h-4 w-56"></div>

            <div className=" skeleton h-4 w-60"></div>
          </div>
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
};
