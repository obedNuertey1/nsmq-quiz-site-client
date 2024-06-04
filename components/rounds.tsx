import type { NextPage } from "next";
import RoundItems from "./round-items";

export type RoundsType = {
  className?: string;
};

const Rounds: NextPage<RoundsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-gray-400 flex flex-row flex-wrap items-start justify-center py-[3.812rem] pr-[2.875rem] pl-[4.625rem] box-border gap-[1.875rem] min-h-[26.688rem] max-w-full text-center text-[2rem] text-black font-roboto mq450:pt-[2.5rem] mq450:pb-[2.5rem] mq450:box-border mq725:gap-[0.938rem] mq725:pl-[2.313rem] mq725:pr-[1.438rem] mq725:box-border ${className}`}
    >
      <div className="h-[26.688rem] w-[90rem] relative bg-gray-400 hidden max-w-full" />
      <RoundItems fundamental="Fundamental" questions="Questions" prop="1" />
      <div className="h-[17rem] flex-1 relative min-w-[14.688rem] max-w-[15rem]">
        <div className="absolute top-[3.75rem] left-[0rem] rounded-8xs bg-gray-100 flex flex-row items-start justify-start pt-[4.75rem] pb-[3.75rem] pr-[4.625rem] pl-[4.687rem] z-[1]">
          <div className="h-[13.25rem] w-[15rem] relative rounded-8xs bg-gray-100 hidden" />
          <b className="relative font-bold z-[2] mq450:text-[1.188rem] mq1000:text-[1.625rem]">
            <p className="m-0">Speed</p>
            <p className="m-0">Race</p>
          </b>
        </div>
        <div className="absolute top-[0rem] left-[3.75rem] w-[7.5rem] h-[7.5rem] text-[3rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-mediumblue-200 box-border w-full h-full z-[2] border-[0px] border-solid border-black" />
          <b className="absolute top-[2rem] left-[2.875rem] font-bold inline-block min-w-[1.75rem] z-[3] mq450:text-[1.813rem] mq1000:text-[2.375rem]">
            2
          </b>
        </div>
      </div>
      <RoundItems
        fundamental="Problem Of"
        questions="The Day"
        prop="3"
        propBackgroundColor="#fffefe"
        propPadding="4.75rem 2.375rem 3.75rem 2.437rem"
        propBackgroundColor1="#fffefe"
        propBackgroundColor2="#debc0b"
        propDisplay="inline-block"
        propMinWidth="1.75rem"
      />
      <RoundItems
        fundamental="True Or"
        questions="False"
        prop="4"
        propBackgroundColor="#fffefe"
        propPadding="4.75rem 4.125rem 3.75rem"
        propBackgroundColor1="#fffefe"
        propBackgroundColor2="#0fcd0b"
        propDisplay="inline-block"
        propMinWidth="1.75rem"
      />
      <div className="h-[17rem] flex-1 relative min-w-[14.688rem] max-w-[15rem]">
        <div className="absolute top-[3.75rem] left-[0rem] rounded-8xs bg-gray-100 h-[13.25rem] flex flex-row items-start justify-start py-[4.75rem] px-[4.125rem] box-border z-[1]">
          <div className="h-[13.25rem] w-[15rem] relative rounded-8xs bg-gray-100 hidden" />
          <b className="relative font-bold inline-block min-w-[6.75rem] z-[2] mq450:text-[1.188rem] mq1000:text-[1.625rem]">
            Riddles
          </b>
        </div>
        <div className="absolute top-[0rem] left-[3.75rem] w-[7.5rem] h-[7.5rem] text-[3rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-darkorange box-border w-full h-full z-[2] border-[0px] border-solid border-black" />
          <b className="absolute top-[2rem] left-[2.875rem] font-bold inline-block min-w-[1.75rem] z-[3] mq450:text-[1.813rem] mq1000:text-[2.375rem]">
            5
          </b>
        </div>
      </div>
    </div>
  );
};

export default Rounds;
