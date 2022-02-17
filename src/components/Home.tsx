import File from "./File";

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
            icon: "home",
            iconClass: "text-green-500",
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

const Home = () => {
  return (
    <div className="w-100 h-screen bg-gray-200 flex justify-center items-center">
      <File
        data={data}
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
