import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type NutritionPlansSignUpType = {
  className?: string;
};

const NutritionPlansSignUp: NextPage<NutritionPlansSignUpType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onResourcesTextClick = useCallback(() => {
    router.push("/resources");
  }, [router]);

  const onQuizTextClick = useCallback(() => {
    router.push("/quiz");
  }, [router]);

  const onInfoTextClick = useCallback(() => {
    router.push("/info");
  }, [router]);

  const onLogInTextClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onSignupClick = useCallback(() => {
    router.push("/signup");
  }, [router]);

  return (
    <header
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] pr-[4.562rem] pl-[4.75rem] box-border max-w-full text-left text-[2rem] text-mediumslateblue-200 font-roboto mq750:pl-[2.375rem] mq750:pr-[2.25rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
        <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] text-[3rem]">
          <h3 className="m-0 relative text-inherit font-black font-inherit whitespace-nowrap">
            SciMathIQ
          </h3>
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] box-border max-w-full text-black">
          <div className="flex flex-row items-start justify-start gap-[1.625rem] lg:hidden">
            <div className="w-[6.125rem] flex flex-col items-start justify-start py-[0rem] pr-[0.312rem] pl-[0rem] box-border">
              <div className="h-[2.188rem] flex flex-row items-start justify-start py-[0rem] pr-[0.5rem] pl-[0.187rem] box-border">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.144rem] shrink-0 [debug_commit:bf4bc93]">
                  Home
                </a>
              </div>
              <div className="self-stretch h-[0.625rem] relative rounded-t-8xs rounded-b-none bg-dimgray shrink-0 [debug_commit:bf4bc93]" />
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem]">
              <a
                className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.375rem] cursor-pointer"
                onClick={onAboutTextClick}
              >
                About
              </a>
            </div>
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
            <a
              className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.5rem] cursor-pointer"
              onClick={onInfoTextClick}
            >
              Info
            </a>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.562rem] text-orangered mq750:hidden">
          <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
            <a
              className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[5.563rem] whitespace-nowrap cursor-pointer"
              onClick={onLogInTextClick}
            >
              Log in
            </a>
          </div>
          <button
            className="cursor-pointer [border:none] pt-[1.062rem] pb-[1.812rem] pr-[1.312rem] pl-[1.375rem] bg-gray-300 rounded-8xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray"
            onClick={onSignupClick}
          >
            <div className="h-[4.55rem] w-[9.938rem] relative rounded-8xs bg-gray-300 hidden" />
            <a className="[text-decoration:none] relative text-[2rem] leading-[1.675rem] font-bold font-roboto text-white text-left inline-block min-w-[7.25rem] z-[1]">
              Sign up
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NutritionPlansSignUp;
