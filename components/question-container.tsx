import type { NextPage } from "next";

export type QuestionContainerType = {
  className?: string;
};

const QuestionContainer: NextPage<QuestionContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.437rem] pl-[1.25rem] box-border max-w-full text-left text-[2.25rem] text-black font-roboto ${className}`}
    >
      <div className="w-[75.375rem] flex flex-col items-start justify-start gap-[2.125rem] max-w-full mq725:gap-[1.063rem]">
        <div className="w-[71.688rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[41.688rem] flex flex-col items-start justify-start max-w-full">
            <div className="flex flex-row items-start justify-start gap-[0.812rem] max-w-full mq725:flex-wrap">
              <img
                className="h-[3.063rem] w-[3.063rem] relative object-cover min-h-[3.063rem]"
                loading="lazy"
                alt=""
                src="/speakerfilledaudiotool-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <div className="relative font-medium mq450:text-[1.375rem] mq1000:text-[1.813rem]">
                  What is the chemical symbol of Gold?
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.812rem] mt-[-0.188rem] text-[4rem]">
              <h1 className="m-0 w-[3.375rem] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-[2.375rem] mq1000:text-[3.188rem]">
                ...
              </h1>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap mq450:justify-center">
          <img
            className="h-[2.5rem] w-[2.5rem] relative object-contain min-h-[2.5rem]"
            loading="lazy"
            alt=""
            src="/rightarrow-3@2x.png"
          />
          <img
            className="h-[2.5rem] w-[2.5rem] relative object-cover min-h-[2.5rem]"
            loading="lazy"
            alt=""
            src="/rightarrow-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
