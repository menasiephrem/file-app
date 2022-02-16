import TreeMenu from "react-simple-tree-menu";
import { ItemComponent } from "./ItemComponent";

const data = [
  {
    key: "mammal",
    label: "Mammal",
    numbers: "234",
    nodes: [
      {
        key: "canidae",
        label: "Canidae",
        numbers: "334",
        nodes: [
          {
            key: "dog",
            label: "Dog",
            nodes: [],
            url: "https://www.google.com/search?q=dog",
            numbers: "334",
            file: true,
          },
          {
            key: "fox",
            label: "Fox",
            nodes: [],
            url: "https://www.google.com/search?q=fox",
            numbers: "554",
            file: false,
          },
          {
            key: "wolf",
            label: "Wolf",
            nodes: [],
            url: "https://www.google.com/search?q=wolf",
            numbers: "663",
            file: false,
          },
        ],
        url: "https://www.google.com/search?q=canidae",
      },
    ],
    url: "https://www.google.com/search?q=mammal",
  },
  {
    key: "reptile",
    label: "Reptile",
    numbers: "332",
    nodes: [
      {
        key: "squamata",
        label: "Squamata",
        numbers: "445",
        nodes: [
          {
            key: "lizard",
            label: "Lizard",
            url: "https://www.google.com/search?q=lizard",
            file: true,
            numbers: "33664",
          },
          {
            key: "snake",
            label: "Snake",
            url: "https://www.google.com/search?q=snake",
            file: false,
            numbers: "534",
          },
          {
            key: "gekko",
            label: "Gekko",
            url: "https://www.google.com/search?q=gekko",
            file: true,
            numbers: "3664",
          },
        ],
        url: "https://www.google.com/search?q=squamata",
      },
    ],
    url: "https://www.google.com/search?q=reptile",
  },
];

const FileSelector = () => {
  return (
    <TreeMenu
      data={data}
      initialActiveKey="mammal/canidae" // the path to the active node
      debounceTime={125}
    >
      {({ items }) => (
        <div>
          <ul>
            {items.map(({ key, ...props }) => (
              <ItemComponent key={key} {...props} />
            ))}
          </ul>
        </div>
      )}
    </TreeMenu>
  );
};

export default FileSelector;
