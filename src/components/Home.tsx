import { data } from "../data";
import File from "./File";


const Home = () => {
  return (
    <div className="w-100 h-screen bg-gray-200 flex justify-center items-center">
      <File
        data={data as any}
        onItemClick={(item) => console.log("1")}
        header={{
          title: "Documents",
          onClick: () => {},
          buttonText: "Add",
        }}
      />
    </div>
  );
};

export default Home;
