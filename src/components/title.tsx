import { COLORS } from "../constants/constant";
import { motion } from "framer-motion";
function Title(props: { name: string }) {
  return (
    <div
      id="about"
      className="flex justify-center py-2 xs:text-fs_xs sm:text-fs_sm md:text-fs_md"
    >
      <p
        className="font-bold uppercase"
        style={{
          color: COLORS.RED,
          letterSpacing: 5,
        }}
      >
        {props.name}
      </p>
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        <p
          style={{
            // fontSize: { xs: 28, sm: 40, md: 50 },
            color: COLORS.GREEN,
            fontWeight: "bold",
          }}
        >
          .
        </p>
      </motion.div>
    </div>
  );
}

export default Title;
