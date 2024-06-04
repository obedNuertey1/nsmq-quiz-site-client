import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] pr-[4.812rem] pl-[4.875rem] box-border max-w-full text-left text-[2rem] text-black font-roboto mq750:pl-[2.438rem] mq750:pr-[2.375rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.312rem] max-w-full">
        <b className="relative mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          About The Website
        </b>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem] text-[1.5rem]">
          <p className="m-0 relative mq450:text-[1.188rem]">
            <span className="block">
              Our website is dedicated to revolutionalizing the preparation
              process for Ghana’s National Science and Math Quiz.
            </span>
            <span className="block">{`Powered by advanced AI-technology. Our platform offers personalized study paths, adaptive quizzes and comprehensive `}</span>
            <span className="block">
              reasons to empower students in their quest for excellence.
            </span>
            <span className="block">{`Whether mastering fundamental concepts or taking challenging riddles, our goal is to provide a dynamic and immersive `}</span>
            <span className="block">
              learning experience that fosters confidence and success in the
              prestigious quiz competition.
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
                  loading="lazy"
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

export default FrameComponent4;
