import type { NextPage } from "next";
import Google from "./google";

export type Loginbox1Type = {
  className?: string;
};

const Loginbox1: NextPage<Loginbox1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[61.625rem] bg-black flex flex-col items-end justify-start pt-[5.625rem] px-[7.312rem] pb-[19rem] box-border gap-[3.25rem] max-w-full text-left text-[3rem] text-white font-roboto lg:pt-[3.625rem] lg:pb-[12.375rem] lg:box-border mq750:gap-[1.625rem] mq750:pt-[2.375rem] mq750:px-[1.813rem] mq750:pb-[8.063rem] mq750:box-border mq1050:pl-[3.625rem] mq1050:pr-[3.625rem] mq1050:box-border ${className}`}
    >
      <div className="w-[61.625rem] h-[90.375rem] relative bg-black hidden max-w-full" />
      <div className="w-[46.063rem] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.437rem] pl-[1.25rem]">
          <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
            Create Your Account
          </h3>
        </div>
        <div className="relative text-[2rem] z-[1] mt-[-0.125rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          Prepare for success - Create your quiz account now.
        </div>
      </div>
      <div className="w-[45.25rem] flex flex-row items-start justify-end py-[0rem] px-[3.875rem] box-border max-w-full mq750:pl-[1.938rem] mq750:pr-[1.938rem] mq750:box-border">
        <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.5rem] pr-[0.937rem] pl-[0.312rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.625rem] max-w-full">
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
                  <div className="absolute top-[0.438rem] left-[0.438rem] flex flex-row items-start justify-start">
                    <div className="h-[0.313rem] w-[36.563rem] absolute !m-[0] right-[-17.5rem] bottom-[0.875rem] box-border z-[1] border-t-[5px] border-solid border-white" />
                    <b className="relative text-[2rem] font-semibold font-roboto text-white text-left inline-block min-w-[2.688rem] z-[3] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                      OR
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[7.5rem] relative max-w-full">
                <div className="absolute top-[1rem] left-[0rem] rounded-8xs bg-gray-800 box-border w-[36.25rem] flex flex-row items-start justify-start py-[1.625rem] px-[3.937rem] max-w-full z-[1] border-[6px] border-solid border-white">
                  <div className="h-[6.5rem] w-[36.25rem] relative rounded-8xs bg-gray-800 box-border hidden max-w-full border-[6px] border-solid border-white" />
                  <div className="relative text-[2rem] font-roboto text-gray-700 text-left inline-block min-w-[7.875rem] z-[4] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                    Required
                  </div>
                </div>
                <div className="absolute top-[0rem] left-[3.375rem] w-[13rem] h-[2.188rem]">
                  <div className="absolute top-[0.313rem] left-[0rem] bg-black w-[13rem] h-[1.625rem] z-[2]" />
                  <div className="absolute top-[0rem] left-[0.563rem] text-[1.875rem] font-medium font-roboto text-white text-left z-[3] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
                    Email address
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[7.5rem] relative max-w-full mq750:h-auto mq750:min-h-[120]">
                <div className="absolute top-[1rem] left-[0rem] rounded-8xs bg-gray-800 box-border w-full flex flex-row items-start justify-between pt-[1.5rem] pb-[1.562rem] pr-[3.062rem] pl-[3.562rem] gap-[1.25rem] max-w-full z-[1] border-[6px] border-solid border-white mq750:flex-wrap mq750:pl-[1.75rem] mq750:pr-[1.5rem] mq750:box-border">
                  <div className="h-[6.5rem] w-[36.25rem] relative rounded-8xs bg-gray-800 box-border hidden max-w-full border-[6px] border-solid border-white" />
                  <div className="relative text-[2rem] font-roboto text-gray-700 text-left inline-block min-w-[7.875rem] z-[4] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                    Required
                  </div>
                  <img
                    className="h-[2.563rem] w-[2.563rem] relative object-cover min-h-[2.563rem] z-[2]"
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
            </div>
          </div>
          <div className="w-[36.375rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
              <button className="cursor-pointer [border:none] pt-[2.125rem] px-[11.562rem] pb-[2.187rem] bg-mediumslateblue-200 self-stretch rounded-8xs flex flex-row items-start justify-center box-border max-w-full z-[4] hover:bg-mediumslateblue-100 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="h-[7.25rem] w-[36.25rem] relative rounded-8xs bg-mediumslateblue-200 hidden max-w-full" />
                <b className="relative text-[2.5rem] font-bold font-roboto text-white text-left z-[5] mq450:text-[1.5rem] mq1050:text-[2rem]">
                  Continue
                </b>
              </button>
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="relative text-[2rem] font-roboto text-white whitespace-pre-wrap text-left z-[4] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  Already have an account? Sign in
                </b>
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="h-[0.188rem] w-[6.375rem] relative box-border z-[5] border-t-[3px] border-solid border-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] relative gap-[0.125rem]">
            <div className="relative text-[1.5rem] font-roboto text-white text-left shrink-0 [debug_commit:bf4bc93] z-[4] mq450:text-[1.188rem]">
              <p className="m-0">
                By continuing, you agree to Terms of Service and privacy
              </p>
              <p className="m-0">policy of SciMathIQ.</p>
            </div>
            <div className="w-[11.438rem] h-[0.188rem] absolute !m-[0] right-[7.75rem] bottom-[1.375rem] box-border z-[5] border-t-[3px] border-solid border-white" />
            <img
              className="w-[4.938rem] h-[0.125rem] absolute !m-[0] right-[-0.062rem] bottom-[1.438rem] object-contain z-[5]"
              loading="lazy"
              alt=""
            />
            <div className="w-[3.875rem] h-[0.188rem] relative box-border shrink-0 [debug_commit:bf4bc93] z-[4] border-t-[3px] border-solid border-white" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginbox1;
