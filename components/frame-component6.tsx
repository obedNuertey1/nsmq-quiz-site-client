import type { NextPage } from "next";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start py-[0rem] pr-[0.937rem] pl-[0rem] box-border gap-[3.25rem] max-w-full text-left text-[2.5rem] text-white font-roboto mq750:gap-[1.625rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-[3.375rem] pb-[7.375rem] pr-[1.25rem] pl-[19.437rem] box-border relative gap-[0.625rem] max-w-full lg:pl-[9.688rem] lg:box-border mq750:pl-[4.813rem] mq750:box-border mq450:pl-[1.25rem] mq450:box-border">
        <div className="w-[51.25rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="relative font-extrabold z-[1] mq450:text-[1.5rem] mq1050:text-[2rem]">
            JOIN THE COMMUNITY
          </div>
        </div>
        <div className="relative text-[1.5rem] font-extrabold inline-block max-w-full z-[1] mq450:text-[1.188rem]">
          Connect with fellow learners preparing for the National Science and
          Math Quiz
        </div>
        <div className="w-[90rem] h-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[-0.937rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-gray-400 w-full h-full" />
          <img
            className="absolute top-[9.875rem] left-[48.063rem] w-[3.125rem] h-[3.125rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/outputonlinepngtools-3-1@2x.png"
          />
          <img
            className="absolute top-[9.875rem] left-[44.25rem] w-[3.125rem] h-[3.125rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/outputonlinepngtools-2-1@2x.png"
          />
          <img
            className="absolute top-[9.875rem] left-[40.438rem] w-[3.125rem] h-[3.125rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/outputonlinepngtools-1-1@2x.png"
          />
          <img
            className="absolute top-[9.875rem] left-[36.625rem] w-[3.125rem] h-[3.125rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/outputonlinepngtools-1@2x.png"
          />
          <img
            className="absolute top-[9.875rem] left-[52.125rem] w-[3.125rem] h-[3.125rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/outputonlinepngtools-4-1@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[3.937rem] text-[1.5rem] text-black mq750:pl-[1.938rem] mq750:box-border">
        <div className="relative font-extrabold mq450:text-[1.188rem]">{`Copyright © 2024 Obed Nuertey. Designed by Jiggaman. `}</div>
      </div>
    </footer>
  );
};

export default FrameComponent6;
