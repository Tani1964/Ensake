import MustDrop from "../assets/showdown/must_drop.png";
import Vegas from "../assets/showdown/vegas@2x.png";
import Bolt from "../assets/showdown/bolt@2x.png";
import BoltOff from "../assets/showdown/bolt-off@2x.png";
import Slot from "../assets/showdown/slots@2x.png";
import ShowdownOff from "../assets/showdown/showdown-off.png";
import S from "../assets/showdown/s@2x.png";
import H from "../assets/showdown/h@2x.png";
import O1 from "../assets/showdown/o-1@2x.png";
import W1 from "../assets/showdown/w-1@2x.png";
import D from "../assets/showdown/d@2x.png";
import O2 from "../assets/showdown/o-2@2x.png";
import W2 from "../assets/showdown/w-2@2x.png";
import N from "../assets/showdown/n@2x.png";
import { useState } from "react";

const Showdown = () => {
  const [step, setStep] = useState([1,2,3,4,5,6,7,8])
  const switchStep = (value) =>{
    value.remove(value)
  }
  return (
    <div className="bg-[url(assets/showdown/header.png)] h-screen pt-6 relative">
      <div className=" h-screen ">
        <img className="h-full" src={ShowdownOff} alt="" />
      </div>
      <div className="-translate-y-[104%]  z-10 h-screen w-screen gap-x-10 animate-switch">
        <div className=" h-1/3 flex px-[10%] justify-center gap-0 ">
          <img
            className="animate-top delay-75  translate-x-12 lg:translate-x-24  w-[55%] h-[120%] animation-delay-1000"
            src={Vegas}
            alt=""
          />
    
          <img
            className="animate-flick h-[180%] w-[20%] -translate-y-[20%] -translate-x-[2.8%]"
            src={Bolt}
            alt=""
          />
          <img
            className=" hidden h-[100%] px-6 w-[22%] translate-y-[7%] -translate-x-2"
            src={BoltOff}
            alt=""
          />
          <img
            className="animate-top   h-[120%] translate-y-2 -translate-x-12 lg:-translate-x-20 w-[50%] animation-delay-1000"
            src={Slot}
            alt=""
          />
        </div>
        <div className=" h-2/3  max-w-screen  flex">
          <img
            className="animate-[blink_1s_1]  -translate-y-[24%] h-[170%] w-[25%] -translate-x-[20%] transition duration-150 ease-out"
            src={S}
            alt=""
          />

          <img
            className="animate-[blink_1.5s_1] -translate-y-[23%] h-[160%] w-[25%] -translate-x-[75%] "
            src={H}
            alt=""
          />
          <img
            className="animate-[blink_2s_1] -translate-y-[24%] h-[170%] w-[23%] lg:-translate-x-[210%] -translate-x-[120%] "
            src={O1}
            alt=""
          />

          <img className="animate-[blink_2.5s_1] -translate-y-[26%] h-[170%] w-[25%] -translate-x-[140%] lg:-translate-x-[130%] " src={W1} alt="" />

          <img className="animate-[blink_3s_1] -translate-y-[28%] h-[170%] w-[25%] -translate-x-[175%] " src={D} alt="" />

          <img className="animate-[blink_3.5s_1] -translate-y-[27%] h-[170%] w-[25%] -translate-x-[235%] " src={O2} alt="" />

          <img className="animate-[blink_4s_1] -translate-y-[25%] h-[170%] w-[25%] -translate-x-[293%] " src={W2} alt="" />

          <img className="animate-[blink_4.5s_1] -translate-y-44 h-[170%] w-[25%] -translate-x-[340%] " src={N} alt="" />
        </div>
        <div className=" h-1/3 animation-delay-3000 flex justify-center -translate-y-48 animate-must"> <img src={MustDrop} alt="" /></div>
      </div>
    </div>
  );
};

export default Showdown;
