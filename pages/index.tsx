import type { NextPage } from "next";
import NutritionPlansSignUp from "../components/nutrition-plans-sign-up";
import SaladImageParent from "../components/salad-image-parent";
import FrameComponent6 from "../components/frame-component6";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2.062rem] px-[0rem] pb-[3.375rem] box-border gap-[8.375rem] leading-[normal] tracking-[normal] mq750:gap-[4.188rem] mq450:gap-[2.063rem]">
      <main className="self-stretch flex flex-col items-start justify-start gap-[3.25rem] max-w-full mq750:gap-[1.625rem]">
        <section className="self-stretch flex flex-col items-end justify-start gap-[3.512rem] max-w-full text-left text-[3rem] text-gray-200 font-roboto mq750:gap-[1.75rem]">
          <NutritionPlansSignUp />
          <div className="self-stretch bg-gray-400 flex flex-row items-start justify-start pt-[11.812rem] pb-[14.875rem] pr-[1.5rem] pl-[4.75rem] box-border gap-[3.25rem] max-w-full lg:flex-wrap mq750:gap-[1.625rem] mq750:pl-[2.375rem] mq750:box-border mq450:pt-[5rem] mq450:pb-[6.313rem] mq450:box-border mq1050:pt-[7.688rem] mq1050:pb-[9.688rem] mq1050:box-border">
            <div className="h-[53.563rem] w-[90rem] relative bg-gray-400 hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border min-w-[28.25rem] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.562rem] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.375rem] max-w-full">
                  <h3 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
                    <p className="m-0">{`Enhance Quiz Preparation `}</p>
                    <p className="m-0">with AI-Powered Study Platform</p>
                  </h3>
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full text-[1rem] text-snow">
                    <p className="m-0 relative z-[1]">
                      <span className="block">
                        Our platform blends AI-tech with comprehensive resources
                        for national science and math quiz.
                      </span>
                      <span className="block">
                        Personalized paths, adaptive quizzes, and real-time
                        feedback to ensure focused learning.
                      </span>
                      <span className="block">
                        Join us to master concepts and ace the quiz.
                      </span>
                    </p>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-[1.437rem] pb-[1.062rem] pr-[1.25rem] pl-[2.125rem] bg-mediumslateblue-200 w-[24.813rem] rounded-8xs flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-mediumslateblue-100">
                  <div className="h-[5.188rem] w-[24.813rem] relative rounded-8xs bg-mediumslateblue-200 hidden max-w-full" />
                  <b className="relative text-[2.25rem] font-extrabold font-roboto text-white text-left z-[1]">
                    Get Started
                  </b>
                </button>
              </div>
            </div>
            <img
              className="w-[37.063rem] relative max-h-full object-contain max-w-full z-[1] lg:flex-1"
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
        </section>
        <SaladImageParent />
      </main>
      <FrameComponent6 />
    </div>
  );
};

export default Home;
