import About from "./pages/about";
import Home from "./pages/home";
import { COLORS } from "./constants/constant";
import Timeline from "./pages/timeline";
import Technologies from "./pages/technologies";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

const screens: { name: string; comp: any }[] = [
  {
    name: "Home",
    comp: Home,
  },
  {
    name: "About",
    comp: About,
  },
  {
    name: "Projects",
    comp: Projects,
  },
  {
    name: "Timeline",
    comp: Timeline,
  },
  {
    name: "Technologies",
    comp: Technologies,
  },
  {
    name: "Contact",
    comp: Contact,
  },
];

function App() {
  return (
    <div className=" bg-white text-black font-mono">
      {screens.map((item, idx) => (
        <div
          className="h-screen md:h-halfscreen lg:h-screen"
          style={{
            backgroundColor: idx % 2 === 0 ? COLORS.DARKBLUE : COLORS.BLUE,
          }}
        >
          <item.comp />
        </div>
      ))}
    </div>
  );
}

export default App;
