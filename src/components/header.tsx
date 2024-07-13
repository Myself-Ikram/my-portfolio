import { COLORS } from "../constants/constant";
import { motion } from "framer-motion";

const headerBtn: { name: string; ref: string }[] = [
  {
    name: "About",
    ref: "about",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];
const width = window.innerWidth;
function Header() {
  return (
    <div
      style={{ backgroundColor: COLORS.BLUE }}
      className="h-1/6 flex items-center"
    >
      {width >= 768 ? <LargerHeader /> : <SmallHeader />}
    </div>
  );
}

export default Header;

const LargerHeader = () => {
  return (
    <div className="navbar text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <motion.img src="/logo.png" height={50} width={100} />
        </a>
        <motion.p
          style={{
            color: COLORS.RED,
            fontWeight: "bold",
          }}
          initial={{ x: 20 }}
          whileInView={{ x: -20 }}
          transition={{ duration: 2 }}
        >
          .
        </motion.p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal pr-20">
          {headerBtn.map((item) => (
            <li className=" hover:bg-green-500 rounded-lg ">
              <a href={`#${item.ref}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SmallHeader = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-white btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {headerBtn.map((item) => (
              <li>
                <a href={`#${item.ref}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <a className="btn btn-ghost text-xl">
            <motion.img src="/logo.png" height={50} width={100} />
          </a>
          <motion.p
            style={{
              color: COLORS.RED,
              fontWeight: "bold",
            }}
            initial={{ x: 20 }}
            whileInView={{ x: -20 }}
            transition={{ duration: 2 }}
          >
            .
          </motion.p>
        </div>
      </div>
    </div>
  );
};
