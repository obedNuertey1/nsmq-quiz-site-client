import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type RoundItemsType = {
  className?: string;
  fundamental?: string;
  questions?: string;
  prop?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const RoundItems: NextPage<RoundItemsType> = ({
  className = "",
  fundamental,
  questions,
  prop,
  propBackgroundColor,
  propPadding,
  propBackgroundColor1,
  propBackgroundColor2,
  propDisplay,
  propMinWidth,
}) => {
  const roundNamesStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`h-[17rem] flex-1 relative min-w-[14.688rem] max-w-[15rem] text-center text-[2rem] text-black font-roboto ${className}`}
    >
      <div
        className="absolute top-[3.75rem] left-[0rem] rounded-8xs bg-greenyellow flex flex-row items-start justify-start pt-[4.75rem] px-[1.625rem] pb-[3.75rem] z-[1]"
        style={roundNamesStyle}
      >
        <div
          className="h-[13.25rem] w-[15rem] relative rounded-8xs bg-greenyellow hidden"
          style={rectangleDivStyle}
        />
        <b className="relative z-[2] mq450:text-[1.188rem] mq1000:text-[1.625rem]">
          <p className="m-0">{fundamental}</p>
          <p className="m-0">{questions}</p>
        </b>
      </div>
      <div className="absolute top-[0rem] left-[3.75rem] w-[7.5rem] h-[7.5rem] text-[3rem] text-white">
        <div
          className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-red box-border w-full h-full z-[2] border-[0px] border-solid border-black"
          style={ellipseDivStyle}
        />
        <b
          className="absolute top-[2rem] left-[2.875rem] font-bold z-[3] mq450:text-[1.813rem] mq1000:text-[2.375rem]"
          style={bStyle}
        >
          {prop}
        </b>
      </div>
    </div>
  );
};

export default RoundItems;
