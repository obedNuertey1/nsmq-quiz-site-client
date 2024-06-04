import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-end pt-[0rem] px-[3.437rem] pb-[8.187rem] box-border max-w-full text-left text-[2rem] text-black font-roboto lg:pl-[1.688rem] lg:pr-[1.688rem] lg:box-border mq450:pb-[5.313rem] mq450:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[1.312rem] max-w-full">
        <b className="relative inline-block whitespace-pre-wrap max-w-full mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          About The National Science and Math Quiz
        </b>
        <div className="flex flex-col items-start justify-start gap-[0.875rem] text-[1.5rem]">
          <p className="m-0 relative mq450:text-[1.188rem]">
            <span className="block">{`The Ghana National Science and Math Quiz is an annual academic competition that showcases the knowledge and skills `}</span>
            <span className="block">
              of high schools students in Science and Mathematics. Founded in
              1993, the quiz has become one of the most prestigious
            </span>
            <span className="block">
              and competitive events in Ghana’s educational landscape.
            </span>
            <span className="block">
              Teams from various schools across the country compete in regions
              and questions covering a wide range of scientific and
            </span>
            <span className="block">{`mathematical topics. The quiz not only promotes academic excellence but also encourages collaborates critical thinkers `}</span>
            <span className="block">
              and problem solving skills among students with its rich history
              and tradition of excellence. The Ghana National Science and
            </span>
            <span className="block">
              Math Quiz continues to inspire and motivate future generations of
              scientists, engineers and mathematicians.
            </span>
          </p>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem] text-[1.625rem]">
            <div className="flex flex-row items-start justify-start gap-[0.687rem]">
              <div className="flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem]">
                <div className="relative inline-block min-w-[3.813rem] mq450:text-[1.313rem]">
                  <span className="font-semibold">More</span>
                  <span>{` `}</span>
                </div>
              </div>
              <div className="h-[3.125rem] w-[3.125rem] relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-silver-100 w-full h-full" />
                <img
                  className="absolute top-[0.813rem] left-[0.688rem] w-[1.563rem] h-[1.563rem] object-contain z-[1]"
                  alt=""
                  src="/rightarrow-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
