import { Stage, Container, Sprite } from "@pixi/react";
import WheelPic from "../assets/wheel/wheel.png";
import { useState } from "react";
import Marker from "../assets/wheel/marker.png";
import Btn from "../assets/wheel/btn-spin.png"

const Wheel = () => {
  const [position, setPosition] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Let&apos;s play...</h1>
      <Stage
        className=" border-2 w-full bg-transparent"
        options={{ backgroundColor: "white" }}
      >
        
        <Sprite
          className="bg-blue-300"
          image={WheelPic}
          x={400}
          y={300}
          anchor={{ x: 0.5, y: 0.5 }}
          isPlaying={true}
          animationSpeed={0.01}
          rotation={260}
        /><Sprite
        image={Marker}
        x={400}
        y={280}
        anchor={{ x: 0.5, y: 0.5 }}
        alt=""
      />
      </Stage>
      <button><img src={Btn} alt="" /></button>
    </div>
  );
};

export default Wheel;
