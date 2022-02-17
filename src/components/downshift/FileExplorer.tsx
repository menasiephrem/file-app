import TreeMenu from "react-simple-tree-menu";
import { ItemComponent } from "./ItemComponent";

interface IFileSelectorProps {
  data: IFileDate[];
  onItemClick: (item: any) => void;
  initialActiveKey?: string;
}

export interface IFileDate {
  key: string;
  label: string;
  numbers: string;
  [name: string]: any;
  nodes?: IFileDate[];
}

const FileSelector = ({
  data,
  onItemClick,
  initialActiveKey
}: IFileSelectorProps) => {
  return (
    <TreeMenu
      data={data}
      initialActiveKey={initialActiveKey} // the path to the active node
      debounceTime={125}
    >
      {({ items }) => (
        <div>
          <ul>
            {items.map(({ key, ...props }) => (
              <span key={key} onClick={onItemClick}>
                <ItemComponent {...props} key={key} />
              </span>
            ))}
          </ul>
        </div>
      )}
    </TreeMenu>
  );
};

export default FileSelector;
