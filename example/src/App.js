import React from "react";
import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";
import data from './data.json';

function App() {
  const [toggle, setToggle] = React.useState(false);
  const [sIndex, setSIndex] = React.useState(0);
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };
  console.log(sIndex);
  return (
    <div className="App">
      {data.map((item, index) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.title}
          style={{ maxHeight: "80vh", maxWidth: "50vw" }}
          onClick={() => {
            lightBoxHandler(true, index);
          }}
        />
      ))}
      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
    </div>
  );
}

export default App;
