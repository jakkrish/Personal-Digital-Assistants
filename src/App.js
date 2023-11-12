import "./styles.css";
import Header from "./components/Header";
import Contentbox from "./components/Contentbox";

export default function App() {
  const datas = [
    {
      image: "https://picsum.photos/100",
      heading: "Alexa",
      username: "@alexa",
      content: "lorem ipsum"
    },
    {
      image: "https://picsum.photos/100",
      heading: "Alexa",
      username: "@alexa",
      content: "lorem ipsum"
    },
    {
      image: "https://picsum.photos/100",
      heading: "Alexa",
      username: "@alexa",
      content: "lorem ipsum"
    }
  ];

  const renderedData = datas.map((data, i) => {
    return <Contentbox key={i} data={data} />;
  });

  return (
    <div className="App">
      <Header />
      {renderedData}
    </div>
  );
}
