import MaterialIcon from "@material/react-material-icon";
import Button from "./buttons/Button";
import FileSelector from "./downshift/FileExplorer";

const File = () => {
  return (
    <div className="flex w-[302px] flex-col shadow bg-white task-shadow">
      <div className="flex bg-white justify-between  border-b-[1px] border-gray-300 px-4 py-6">
        <span className="text-black flex items-center font-bold text-lg leading-5">
          Documents
        </span>
        <Button onClick={console.log}>
          <MaterialIcon className="pr-1 text-sm" icon="add" /> New
        </Button>
      </div>
      <div className="px-4 py-3">
        <FileSelector />
      </div>
    </div>
  );
};

export default File;
