import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";

const About: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[2.062rem] px-[0rem] pb-[3.312rem] box-border gap-[5.937rem] leading-[normal] tracking-[normal] mq450:gap-[1.5rem] mq750:gap-[2.938rem]">
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
    </div>
  );
};

export default About;
