import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  const router = useRouter();

  const onSciMathIQTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onResourcesTextClick = useCallback(() => {
    router.push("/resources");
  }, [router]);

  const onQuizTextClick = useCallback(() => {
    router.push("/quiz");
  }, [router]);

  return (
    <div
      className={`w-[87.188rem] flex flex-row items-start justify-start py-[0rem] px-[4.75rem] box-border max-w-full text-center text-[1.5rem] text-black font-roboto mq1275:pl-[2.375rem] mq1275:pr-[2.375rem] mq1275:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1275:flex-wrap">
        <div className="w-[67.938rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.687rem] max-w-full">
            <header className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-[3rem] text-mediumslateblue-200 font-roboto">
              <div className="w-[59.375rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1100:flex-wrap">
                <a
                  className="[text-decoration:none] relative font-black text-[inherit] cursor-pointer"
                  onClick={onSciMathIQTextClick}
                >
                  SciMathIQ
                </a>
                <div className="w-[37rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[37rem] max-w-full text-[2rem] text-black mq1100:flex-1 mq1100:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2.125rem] max-w-full mq750:flex-wrap mq750:gap-[1.063rem]">
                    <a
                      className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.438rem] cursor-pointer"
                      onClick={onHomeTextClick}
                    >
                      Home
                    </a>
                    <a
                      className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.375rem] cursor-pointer"
                      onClick={onAboutTextClick}
                    >
                      About
                    </a>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[7.875rem] min-w-[14.25rem] max-w-full text-[2.5rem] mq450:gap-[3.938rem]">
                      <div className="self-stretch h-[2.813rem] relative">
                        <nav className="m-0 absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start gap-[1.487rem] text-left text-[2rem] text-black font-roboto">
                          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.562rem] pl-[0rem]">
                            <a
                              className="[text-decoration:none] relative text-[inherit] cursor-pointer"
                              onClick={onResourcesTextClick}
                            >
                              Resources
                            </a>
                          </div>
                          <a
                            className="[text-decoration:none] relative text-[inherit] inline-block min-w-[4rem] cursor-pointer"
                            onClick={onQuizTextClick}
                          >
                            Quiz
                          </a>
                          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.5rem]">
                            Info
                          </a>
                        </nav>
                        <div className="absolute top-[2.188rem] left-[16.125rem] rounded-t-8xs rounded-b-none bg-dimgray w-[5.813rem] h-[0.625rem] z-[1]" />
                      </div>
                      <h2 className="m-0 relative text-inherit font-extrabold font-inherit inline-block min-w-[5.625rem] mq750:text-[2rem] mq450:text-[1.5rem]">
                        INFO
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <p className="m-0 w-[55.375rem] relative inline-block max-w-full mq450:text-[1.188rem]">
              <span className="block">{`Keep yourself updated with announcements, upcoming events, dates and essential `}</span>
              <span className="block">
                information of the National Science and Math Quiz.
              </span>
            </p>
          </div>
        </div>
        <img
          className="h-[4.5rem] w-[4.5rem] relative object-contain"
          loading="lazy"
          alt=""
          src="/profileuser-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Main;
