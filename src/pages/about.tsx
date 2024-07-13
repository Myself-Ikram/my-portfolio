import Lottie from "lottie-react";
import Title from "../components/title";
import about from "../lotties/about.json";
import { motion } from "framer-motion";
function About() {
  return (
    <div id="about" className="h-full flex flex-col gap-1 p-2">
      <Title name={"About Me"} />
      <div className="p-2 flex flex-1 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white text-sm lg:text-xl leading-6 lg:leading-relaxed">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="h-56 md:h-80">
                <Lottie animationData={about} style={{ height: "100%" }} />
              </div>
            </motion.div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
              >
                I'm a recent graduate with 1 year of experience as a Junior
                Software Developer (MERN stack & React Native) seeking new
                opportunities to leverage my skills. I hold a Bachelor of
                Technology from Jawaharlal Nehru Technological University
                Hyderabad. I'm passionate about the software industry and
                applying my academic knowledge and practical skills to
                real-world challenges.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 2 }}
              >
                During my time as a Junior Developer, I gained experience in
                building web and mobile applications. Prior to that, I honed my
                skills through hands-on projects.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
