import MaterialIcon from "@material/react-material-icon";
import React from "react";
import { classNames } from "../../utils";
export interface Item {
  hasNodes: boolean;
  isOpen: boolean;
  level: number;
  key: string;
  label: string;
  [name: string]: any;
}

const styleClass = {
  root: (level: number, active?: boolean) =>
    classNames(
      "flex items-center px-1 hover:bg-gray-100",
      level === 0 && "ml-0",
      level === 1 && "ml-6",
      level === 2 && "ml-10",
      active && "bg-[#DFF0FE]"
    ),
  label: (active: boolean) =>
    classNames("font-normal text-sm", active ? "text-task-blue" : "text-black"),
  badge: (active?: boolean) =>
    classNames(
      "text-[8px] px-1 rounded-md ml-auto",
      active ? "bg-[#269BF7] text-white" : " bg-gray-300"
    ),
  file: (isFile: boolean, iconClass?: string) =>
    classNames(
      "flex items-center text-sm pr-3 material-icon-outlined",
      !iconClass && isFile ? "text-yellow-300" : "text-task-blue",
      iconClass && iconClass
    ),
};

const ToggleIcon = ({ on }: { on: boolean }) => (
  <MaterialIcon
    className="text-base pr-3"
    icon={on ? "expand_more" : "chevron_right"}
  />
);

export interface TreeMenuItem extends Item {
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  toggleNode?: () => void;
}

export type TreeMenuChildren = (props: {
  items: TreeMenuItem[];
  resetOpenNodes?: (openNodes?: string[]) => void;
}) => JSX.Element;

export const ItemComponent: React.FunctionComponent<TreeMenuItem> = ({
  hasNodes = false,
  isOpen = false,
  onClick,
  toggleNode,
  active,
  label = "unknown",
  numbers = "",
  level,
  file,
  icon,
  iconClass,
}) => (
  <li
    className={styleClass.root(level, active)}
    role="button"
    aria-pressed={active}
    onClick={onClick}
  >
    {hasNodes && (
      <div
        className="flex items-center"
        onClick={(e) => {
          toggleNode?.();
          e.stopPropagation();
        }}
      >
        <ToggleIcon on={isOpen} />
      </div>
    )}
    {!hasNodes && (
      <span key={active ? "1" : "2"} className="">
        <MaterialIcon
          className={styleClass.file(file, iconClass)}
          icon={icon ? icon : file ? "insert_drive_file" : "folder"}
        />
      </span>
    )}
    <span className={styleClass.label(false)}>{label}</span>
    <span className={styleClass.badge(active)}>{numbers}</span>
  </li>
);

export const defaultChildren: TreeMenuChildren = ({ items }) => {
  return (
    <>
      <ul className="">
        {items.map(({ key, ...props }) => (
          <ItemComponent key={key} {...props}></ItemComponent>
        ))}
      </ul>
    </>
  );
};
