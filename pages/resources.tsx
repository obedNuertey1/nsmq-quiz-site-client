import type { NextPage } from "next";
import Submenu from "../components/submenu";
import Content from "../components/content";
import FrameComponent11 from "../components/frame-component1";

const Resources: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2.125rem] px-[0rem] pb-[2.875rem] box-border gap-[2.125rem] leading-[normal] tracking-[normal] text-left text-[1.5rem] text-black font-roboto mq750:gap-[1.063rem]">
      <main className="w-[89.063rem] flex flex-row items-start justify-start pt-[0rem] px-[4.75rem] pb-[5.625rem] box-border max-w-full lg:pb-[3.625rem] lg:box-border mq750:pl-[2.375rem] mq750:pr-[2.375rem] mq750:box-border mq450:pb-[1.563rem] mq450:box-border mq1050:pb-[2.375rem] mq1050:box-border">
        <section className="flex-1 flex flex-col items-end justify-start max-w-full">
          <Submenu />
          <Content />
        </section>
      </main>
      <FrameComponent11 />
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[3.25rem] mq750:pl-[1.625rem] mq750:box-border">
        <div className="relative font-extrabold mq450:text-[1.188rem]">{`Copyright © 2024 Obed Nuertey. Designed by Jiggaman. `}</div>
      </div>
    </div>
  );
};

export default Resources;
