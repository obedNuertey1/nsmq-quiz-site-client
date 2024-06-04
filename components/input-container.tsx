import type { NextPage } from "next";

export type InputContainerType = {
  className?: string;
};

const InputContainer: NextPage<InputContainerType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[2.625rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full text-left text-[2rem] text-gray-600 font-roboto ${className}`}
    >
      <div className="w-[75.375rem] bg-lightgray-100 flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.562rem] box-border max-w-full gap-[1.25rem] mq725:flex-wrap mq725:pl-[1.25rem] mq725:pr-[1.25rem] mq725:pb-[1.25rem] mq725:box-border">
        <div className="self-stretch w-[75.375rem] relative bg-lightgray-100 hidden max-w-full" />
        <div className="w-[25.438rem] flex flex-col items-start justify-start pt-[1.687rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[1.687rem] mq450:flex-wrap">
            <div className="flex flex-row items-end justify-start gap-[0.625rem]">
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                <img
                  className="w-[2.688rem] h-[2.688rem] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/microphoneblackshape-1@2x.png"
                />
              </div>
              <img
                className="h-[3rem] w-[3rem] relative object-cover min-h-[3rem] z-[1]"
                loading="lazy"
                alt=""
                src="/camera-1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[11.313rem]">
              <div className="relative font-medium z-[1] mq450:text-[1.188rem] mq1000:text-[1.625rem]">
                Type answer here...
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[1.937rem] pb-[2.062rem] pr-[2.125rem] pl-[2.375rem] bg-mediumblue-200 flex flex-row items-start justify-start z-[1] hover:bg-mediumblue-100">
          <div className="h-[6.375rem] w-[10.875rem] relative bg-mediumblue-200 hidden" />
          <div className="relative text-[2rem] font-medium font-roboto text-white text-left inline-block min-w-[6.375rem] z-[2] mq450:text-[1.188rem] mq1000:text-[1.625rem]">
            Submit
          </div>
        </button>
      </div>
    </section>
  );
};

export default InputContainer;
