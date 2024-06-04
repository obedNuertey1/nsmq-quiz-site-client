import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  copyright2024Margin?: CSSProperties["margin"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  copyright2024Margin,
}) => {
  const copyright2024Style: CSSProperties = useMemo(() => {
    return {
      margin: copyright2024Margin,
    };
  }, [copyright2024Margin]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[3.25rem] max-w-full text-left text-[1.5rem] text-black font-roboto mq750:gap-[1.625rem] ${className}`}
    >
      <footer className="self-stretch bg-gray-400 flex flex-col items-center justify-start pt-[3.375rem] pb-[3.187rem] pr-[1.25rem] pl-[3.25rem] box-border gap-[3.5rem] max-w-full text-left text-[2.5rem] text-white font-roboto mq750:gap-[1.75rem] mq750:pl-[1.625rem] mq750:box-border">
        <div className="w-[90rem] h-[16.188rem] relative bg-gray-400 hidden max-w-full" />
        <div className="relative font-extrabold inline-block max-w-full z-[1] mq450:text-[1.5rem] mq1050:text-[2rem]">
          JOIN THE COMMUNITY
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[4.062rem] pl-[3.937rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="flex flex-row items-start justify-center gap-[0.687rem] mq450:flex-wrap">
            <img
              className="h-[3.125rem] w-[3.125rem] relative object-cover min-h-[3.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/outputonlinepngtools-1@2x.png"
            />
            <img
              className="h-[3.125rem] w-[3.125rem] relative object-cover min-h-[3.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/outputonlinepngtools-1-1@2x.png"
            />
            <img
              className="h-[3.125rem] w-[3.125rem] relative object-cover min-h-[3.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/outputonlinepngtools-2-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]">
              <img
                className="w-[3.125rem] h-[3.125rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/outputonlinepngtools-3-1@2x.png"
              />
            </div>
            <img
              className="h-[3.125rem] w-[3.125rem] relative object-cover min-h-[3.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/outputonlinepngtools-4-1@2x.png"
            />
          </div>
        </div>
      </footer>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[4.875rem] mq750:pl-[2.438rem] mq750:box-border">
        <p
          className="m-0 relative font-extrabold mq450:text-[1.188rem]"
          style={copyright2024Style}
        >{`Copyright © 2024 Obed Nuertey. Designed by Jiggaman. `}</p>
      </div>
    </section>
  );
};

export default FrameComponent;
