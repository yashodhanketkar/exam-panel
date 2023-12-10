import { Controls } from "@/components/controls";
import { Nav } from "@/components/nav";
import { Side } from "@/components/side";
import { Questions } from "../components/questions";

const Home = () => {
  return (
    <div className="grid md:grid-cols-6">
      <div className="col-span-4 xl:col-span-5 p-2 flex flex-col justify-between">
        <Nav />
        <Questions />
        <Controls />
      </div>
      <div className="col-span-2 xl:col-span-1">
        <Side />
      </div>
    </div>
  );
};

export default Home;
