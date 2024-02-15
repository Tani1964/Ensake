import { Container, Sprite, Stage } from "@pixi/react";
import { useState, useEffect } from "react";
import Btn from "../assets/wheel/btn-spin.png";
import Marker from "../assets/wheel/marker.png";
import WheelPic from "../assets/wheel/wheel.png";

const Wheel = () => {
  const [position, setPosition] = useState(0);
  const [click, setClick] = useState(false);

  useEffect(() => {
    let interval;

    if (click) {
      let elapsedTime = 0;
      const spinDuration = Math.random()*3000; // Duration of the spin in milliseconds

      interval = setInterval(() => {
        // Update the position of the wheel
        setPosition((prevPosition) => prevPosition + 0.1); // Adjust the rotation speed as needed

        // Update elapsed time
        elapsedTime += 16; // Interval is 16 milliseconds (60 frames per second)

        // Check if the spin duration has elapsed
        if (elapsedTime >= spinDuration) {
          clearInterval(interval); // Stop the spinning animation
          setClick(false); // Reset the click state
        }
      }, 16); // Adjust the interval as needed (60 frames per second)
    }

    return () => clearInterval(interval);
  }, [click]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Let&apos;s play...</h1>
      <Stage
        className=" w-full bg-transparent"
        options={{ backgroundColor: "white" }}
      >
        <Sprite
          className="bg-blue-300"
          image={WheelPic}
          x={400}
          y={300}
          anchor={{ x: 0.5, y: 0.5 }}
          rotation={position}
        />
        <Sprite
          image={Marker}
          x={400}
          y={280}
          anchor={{ x: 0.5, y: 0.5 }}
          alt=""
        />
      </Stage>
      <button onClick={() => setClick(true)}>
        <img src={Btn} alt="" />
      </button>
    </div>
  );
};

export default Wheel;
