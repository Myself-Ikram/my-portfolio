import Title from "../components/title";
import { COLORS, timeline } from "../constants/constant";
import { motion } from "framer-motion";
function Timeline() {
  return (
    <div id="timeline" className="h-full flex flex-col gap-1">
      <Title name="Timeline" />
      {/* Roadmap */}
      <div className=" text-xs md:text-toosmall lg:text-xs text-white flex flex-col flex-1 justify-center">
        {timeline.map((item: { desc: string; year: string }, idx) => (
          <div
            className={`flex justify-center ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <motion.div
              className={`p-2 w-5/12`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <p style={{ color: COLORS.GREEN }}>{item.year}</p>
              <p>{item.desc}</p>
            </motion.div>
            <motion.div
              className=" bg-slate-50 flex items-center justify-center "
              style={{ width: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.div
                className={`border-4 rounded`}
                style={{
                  borderColor: idx % 2 === 0 ? COLORS.GREEN : COLORS.RED,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 2 }}
                transition={{ duration: 2, delay: 2 }}
              ></motion.div>
            </motion.div>
            <div className={`p-2 w-5/12`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
