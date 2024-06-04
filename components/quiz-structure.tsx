import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type QuizStructureType = {
  className?: string;
};

const QuizStructure: NextPage<QuizStructureType> = ({ className = "" }) => {
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

  const onInfoTextClick = useCallback(() => {
    router.push("/info");
  }, [router]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[4.937rem] pr-[5.125rem] pl-[4.75rem] box-border max-w-full text-left text-[3rem] text-mediumslateblue-200 font-roboto mq725:pl-[2.375rem] mq725:pr-[2.563rem] mq725:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
        <div className="w-[60.25rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
            <a
              className="[text-decoration:none] relative font-black text-[inherit] whitespace-nowrap cursor-pointer"
              onClick={onSciMathIQTextClick}
            >
              SciMathIQ
            </a>
            <div className="w-[35.75rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border max-w-full text-[2rem] text-black mq1050:w-[0rem]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[2.125rem] max-w-full mq725:gap-[1.063rem] mq1050:hidden">
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
                <div className="flex-1 flex flex-row items-start justify-start gap-[0.812rem] max-w-full mq725:hidden">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem]">
                    <a
                      className="[text-decoration:none] relative text-[inherit] cursor-pointer"
                      onClick={onResourcesTextClick}
                    >
                      Resources
                    </a>
                  </div>
                  <div className="w-[5.813rem] flex flex-col items-start justify-start">
                    <div className="h-[2.188rem] flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0.75rem] box-border">
                      <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[4rem] shrink-0 [debug_commit:bf4bc93]">
                        Quiz
                      </a>
                    </div>
                    <div className="self-stretch h-[0.625rem] relative rounded-t-8xs rounded-b-none bg-dimgray shrink-0 [debug_commit:bf4bc93] z-[1]" />
                  </div>
                  <a
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.5rem] cursor-pointer"
                    onClick={onInfoTextClick}
                  >
                    Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[4.5rem] w-[4.5rem] relative object-cover"
          loading="lazy"
          alt=""
          src="/profileuser-1@2x.png"
        />
      </div>
    </header>
  );
};

export default QuizStructure;
