import Button from "./buttons/Button";
import FileSelector from "./downshift/FileExplorer";
import MaterialIcon from "./Icon/MaterialIcon";

interface IFileProps {
  header?: {
    title: string;
    onClick: () => void;
    buttonText: string;
  }
  data: IFileDate[];
  onItemClick: (item: any) => void;
  maxHeight?: number;
}

export interface IFileDate {
    key: string,
    label: string,
    numbers: string,
    [name: string]: any;
    nodes?: IFileDate[],
}

const File = ({header, data, onItemClick, maxHeight}: IFileProps) => {
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
      <div style={{maxHeight}} className="px-4 py-3 overflow-y-scroll max-h-[80vh]">
        <FileSelector data={data} onItemClick={onItemClick}  />
      </div>
    </div>
  );
};

export default File;
