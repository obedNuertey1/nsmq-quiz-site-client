import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type SubmenuType = {
  className?: string;
};

const Submenu: NextPage<SubmenuType> = ({ className = "" }) => {
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

  const onQuizTextClick = useCallback(() => {
    router.push("/quiz");
  }, [router]);

  const onInfoTextClick = useCallback(() => {
    router.push("/info");
  }, [router]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[3rem] text-mediumslateblue-200 font-roboto lg:flex-wrap ${className}`}
    >
      <div className="w-[58.125rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap">
          <a
            className="[text-decoration:none] relative font-black text-[inherit] cursor-pointer"
            onClick={onSciMathIQTextClick}
          >
            SciMathIQ
          </a>
          <div className="w-[35.75rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[35.75rem] max-w-full text-[2rem] text-black mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start gap-[2.125rem] max-w-full mq750:flex-wrap mq750:gap-[1.063rem]">
              <a
                className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.438rem] cursor-pointer"
                onClick={onHomeTextClick}
              >
                Home
              </a>
              <div className="flex-1 flex flex-col items-start justify-start gap-[7.187rem] min-w-[18.313rem] max-w-full mq450:gap-[3.563rem]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.625rem]">
                  <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.187rem] pl-[0rem]">
                    <a
                      className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.375rem] cursor-pointer"
                      onClick={onAboutTextClick}
                    >
                      About
                    </a>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.312rem] pl-[0rem] gap-[0.062rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[0.312rem]">
                      <a className="[text-decoration:none] relative text-[inherit]">
                        Resources
                      </a>
                    </div>
                    <div className="self-stretch h-[0.813rem] relative rounded-t-8xs rounded-b-none bg-dimgray" />
                  </div>
                  <a
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[4rem] cursor-pointer"
                    onClick={onQuizTextClick}
                  >
                    Quiz
                  </a>
                  <a
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.5rem] cursor-pointer"
                    onClick={onInfoTextClick}
                  >
                    Info
                  </a>
                </div>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[3.25rem] box-border max-w-full text-[2.5rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                  <b className="relative font-extrabold mq450:text-[1.5rem] mq1050:text-[2rem]">
                    RESOURCES
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[4.375rem] w-[4.375rem] relative object-contain"
        loading="lazy"
        alt=""
        src="/profileuser-2@2x.png"
      />
    </header>
  );
};

export default Submenu;
