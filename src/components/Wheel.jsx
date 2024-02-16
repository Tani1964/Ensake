import { Container, Sprite, Stage } from "@pixi/react";
import { useState, useEffect } from "react";
import Btn from "../assets/wheel/btn-spin.png";
import Marker from "../assets/wheel/marker.png";
import WheelPic from "../assets/wheel/wheel.png";
import { data } from "../endpoints/WheelData";

const Wheel = () => {
  const [position, setPosition] = useState(0);
  const [click, setClick] = useState(false);
  const [wheelPosition, setWheelPosition] = useState(0);
  const [state, setState] = useState(true);


  useEffect(() => {
    let interval;

    if (click) {
      let elapsedTime = 0;
      const spinDuration = Math.random() * 4000; // Duration of the spin in milliseconds
      const finalRotation = Math.random() * 10 + 10; // Random rotation angle between 10 and 20 radians

      interval = setInterval(() => {
        // Update the position of the wheel
        setPosition(() => (data.position + Math.random())); // Adjust the rotation speed as needed

        // Update elapsed time
        elapsedTime += 15; // Interval is 15 milliseconds (60 frames per second)

        // Check if the spin duration has elapsed
        if (elapsedTime >= spinDuration) {
          clearInterval(interval); // Stop the spinning animation
          setClick(false); // Reset the click state
          setTimeout(() => {
            setPosition(0);
            setState(true);
          }, spinDuration + 6000);// Calculate the wheel position after the spin
        }
      }, 15); // Adjust the interval as needed (60 frames per second)
    }

    return () => clearInterval(interval);
  }, [click]);


  // Define the number of sections in the wheel
  const numberOfSections = 3; // Change this according to your wheel setup

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
      <button
        onClick={() => {
          setClick(true);
          setState(false);
        }}
        className={`${state ? "" : "hidden"}`}
      >
        <img src={Btn} alt="" />
      </button>
      {/* {state ? (
        <p>
          You choose{" "}
          {wheelPosition == 0
            ? "pink"
            : wheelPosition == 1
            ? "green"
            : wheelPosition == 2
            ? "blue"
            : wheelPosition == 3
            ? "yellow"
            : null}
        </p>
      ) : (
        <p>
          Wheel is pointing at section:{" "}
          {wheelPosition == 0
            ? "pink"
            : wheelPosition == 1
            ? "green"
            : wheelPosition == 2
            ? "blue"
            : wheelPosition == 3
            ? "yellow"
            : null}
        </p>
      )} */}
      <p>{position}</p>
      <p className="text-[50px] font-semibold">SPIN THE WHEEL...</p>
    </div>
  );
};

export default Wheel;
