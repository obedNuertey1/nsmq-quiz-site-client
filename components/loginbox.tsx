import type { NextPage } from "next";
import Google from "./google";

export type LoginboxType = {
  className?: string;
};

const Loginbox: NextPage<LoginboxType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 w-[61.625rem] bg-black flex flex-col items-end justify-start pt-[5.625rem] px-[12.125rem] pb-[21.187rem] box-border max-w-full lg:pt-[3.625rem] lg:pb-[13.75rem] lg:box-border mq750:pt-[2.375rem] mq750:px-[3rem] mq750:pb-[8.938rem] mq750:box-border mq1050:pl-[6.063rem] mq1050:pr-[6.063rem] mq1050:box-border ${className}`}
    >
      <div className="w-[61.625rem] h-[90.375rem] relative bg-black hidden max-w-full z-[1]" />
      <div className="w-[36.25rem] h-[32.625rem] relative max-w-full mq750:h-auto mq750:min-h-[522]">
        <h3 className="m-0 absolute top-[0rem] left-[8.063rem] text-[3rem] font-semibold font-roboto text-white text-left z-[1] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
          Welcome Back!
        </h3>
        <div className="absolute top-[3.5rem] left-[0rem] w-full flex flex-col items-start justify-start gap-[3.25rem] max-w-full mq750:gap-[1.625rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[1.062rem]">
            <div className="relative text-[2rem] font-roboto text-white text-left z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              Log in to start/continue your progress.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.625rem] max-w-full">
            <Google
              search11="/search-1-1@2x.png"
              continueWithGoogle="Continue with Google"
            />
            <Google
              search11="/search-1-1-1@2x.png"
              continueWithGoogle="Continue with Facebook"
            />
            <div className="w-[34.813rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <div className="h-[3.438rem] w-[3.438rem] relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-black w-full h-full z-[2]" />
                <b className="absolute top-[0.438rem] left-[0.438rem] text-[2rem] font-semibold font-roboto text-white text-left inline-block min-w-[2.688rem] z-[3] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  OR
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[30.438rem] left-[3.375rem] w-[13rem] h-[2.188rem]">
          <div className="absolute top-[0.313rem] left-[0rem] bg-black w-[13rem] h-[1.625rem] z-[2]" />
          <div className="absolute top-[0rem] left-[0.563rem] text-[1.875rem] font-medium font-roboto text-white text-left z-[3] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
            Email address
          </div>
        </div>
      </div>
      <div className="self-stretch h-[10.063rem] flex flex-row items-start justify-end pt-[0rem] pb-[9.75rem] pr-[0.25rem] pl-[0.562rem] box-border max-w-full mt-[-5.625rem]">
        <div className="self-stretch flex-1 relative box-border max-w-full z-[1] border-t-[5px] border-solid border-white" />
      </div>
      <div className="w-[36.25rem] h-[13.75rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[7.25rem] box-border max-w-full mt-[-5.625rem]">
        <div className="self-stretch flex-1 relative rounded-8xs bg-gray-800 box-border max-w-full z-[1] border-[6px] border-solid border-white" />
      </div>
      <div className="w-[36.5rem] flex flex-col items-start justify-start gap-[1.062rem] max-w-full mt-[-5.625rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.375rem] max-w-full mq750:gap-[1.188rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.062rem] max-w-full">
              <div className="self-stretch h-[7.5rem] relative max-w-full">
                <div className="absolute top-[1rem] left-[0rem] rounded-8xs bg-gray-800 box-border w-[36.25rem] flex flex-row items-start justify-end pt-[1.5rem] px-[2.687rem] pb-[1.562rem] max-w-full z-[1] border-[6px] border-solid border-white">
                  <div className="h-[6.5rem] w-[36.25rem] relative rounded-8xs bg-gray-800 box-border hidden max-w-full border-[6px] border-solid border-white" />
                  <img
                    className="h-[2.563rem] w-[2.563rem] relative object-contain z-[2]"
                    alt=""
                    src="/outputonlinepngtools-6-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0rem] left-[3.375rem] w-[9.375rem] h-[2.188rem]">
                  <div className="absolute top-[0.313rem] left-[0rem] bg-black w-[9.375rem] h-[1.625rem] z-[2]" />
                  <div className="absolute top-[0rem] left-[0.563rem] text-[1.875rem] font-medium font-roboto text-white text-left z-[3] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
                    Password
                  </div>
                </div>
              </div>
              <b className="relative text-[2rem] font-bold font-roboto text-white text-left z-[4] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                Forgot password?
              </b>
            </div>
            <button className="cursor-pointer [border:none] pt-[2.312rem] px-[1.25rem] pb-[2rem] bg-mediumslateblue-200 self-stretch rounded-8xs flex flex-row items-start justify-center box-border max-w-full z-[4] hover:bg-mediumslateblue-100">
              <div className="h-[7.25rem] w-[36.25rem] relative rounded-8xs bg-mediumslateblue-200 hidden max-w-full" />
              <b className="relative text-[2.5rem] font-bold font-roboto text-white text-left z-[5] mq450:text-[1.5rem] mq1050:text-[2rem]">
                Continue
              </b>
            </button>
          </div>
        </div>
        <div className="w-[28rem] h-[2.375rem] relative max-w-full">
          <b className="absolute top-[0rem] left-[0rem] text-[2rem] inline-block font-roboto text-white text-left w-full h-full z-[4] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
            Don’t have an account? Sign up
          </b>
          <div className="absolute top-[2.25rem] left-[21.25rem] box-border w-[6.875rem] h-[0.125rem] z-[5] border-t-[2px] border-solid border-white" />
        </div>
      </div>
    </form>
  );
};

export default Loginbox;
