import type { NextPage } from "next";

export type MainContentType = {
  className?: string;
};

const MainContent: NextPage<MainContentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[87.375rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.75rem] box-border max-w-full text-center text-[2rem] text-black font-roboto ${className}`}
    >
      <div className="w-[66.25rem] flex flex-col items-start justify-start gap-[4.062rem] max-w-full mq725:gap-[1rem] mq1050:gap-[2rem]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[1.062rem] max-w-full">
          <div className="w-[61.688rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <img
              className="w-[28.188rem] relative max-h-full object-cover max-w-full"
              loading="lazy"
              alt=""
              src="/logo-11@2x.png"
            />
          </div>
          <div className="self-stretch relative mq450:text-[1.188rem] mq1000:text-[1.625rem]">
            <p className="m-0">Welcome to the ultimate quiz experience.</p>
            <p className="m-0">
              Test your knowledge and shape your skills with our interactive
              quiz rounds.
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-[3rem]">
          <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1.813rem] mq1000:text-[2.375rem]">
            Choose a round
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
