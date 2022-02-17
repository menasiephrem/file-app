import MaterialIcon from "@material/react-material-icon";
import Button from "./buttons/Button";
import FileSelector from "./downshift/FileExplorer";

interface IFileProps {
  header?: {
    title: string;
    onClick: () => void;
    buttonText: string;
  }
  data: IFileDate[];
  onItemClick: (item: any) => void;
}

export interface IFileDate {
    key: string,
    label: string,
    numbers: string,
    [name: string]: any;
    nodes?: IFileDate[],
}

const File = ({header, data, onItemClick}: IFileProps) => {
  return (
    <div className="flex w-[302px] flex-col shadow bg-white task-shadow">
      {header && <div className="flex bg-white justify-between  border-b-[1px] border-gray-300 px-4 py-6">
        <span className="text-black flex items-center font-bold text-lg leading-5">
          {header.title}
        </span>
        <Button onClick={header.onClick}>
          <MaterialIcon className="pr-1 text-sm" icon="add" /> {header.buttonText}
        </Button>
      </div>}
      <div className="px-4 py-3">
        <FileSelector data={data} onItemClick={onItemClick}  />
      </div>
    </div>
  );
};

export default File;
