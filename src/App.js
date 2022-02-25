import "./App.css";
import { Pannellum } from "pannellum-react";
import myImage2 from "./images/IMG_20220221_122830_00_300.jpg";

function App() {
  return (
    <div className="App">
      <h1>Flowtechtics</h1>
      <Pannellum
        width="100%"
        height="500px"
        image={myImage2}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showControls={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      ></Pannellum>
    </div>
  );
}

export default App;
