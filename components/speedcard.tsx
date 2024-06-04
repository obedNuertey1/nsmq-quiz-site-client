import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SpeedcardType = {
  className?: string;
  openBook1?: string;
  speedRound?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Speedcard: NextPage<SpeedcardType> = ({
  className = "",
  openBook1,
  speedRound,
  propDisplay,
  propMinWidth,
}) => {
  const speedRoundStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[0.625rem] min-w-[11.563rem] max-w-[11.813rem] text-left text-[1.5rem] text-black font-roboto ${className}`}
    >
      <div className="self-stretch rounded-8xs bg-lightgray-200 flex flex-row items-start justify-start py-[1.375rem] px-[2.812rem]">
        <div className="h-[8.875rem] w-[11.813rem] relative rounded-8xs bg-lightgray-200 hidden" />
        <img
          className="h-[6.125rem] w-[6.125rem] relative object-contain z-[1]"
          alt=""
          src={openBook1}
        />
      </div>
      <div
        className="relative font-medium mq450:text-[1.188rem]"
        style={speedRoundStyle}
      >
        {speedRound}
      </div>
    </div>
  );
};

export default Speedcard;
