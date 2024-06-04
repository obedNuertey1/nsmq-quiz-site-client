import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  frameNavPadding?: CSSProperties["padding"];

  /** Action props */
  onSciMathIQTextClick?: () => void;
  onLogInTextClick?: () => void;
  onSignupClick?: () => void;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  frameNavPadding,
  onSciMathIQTextClick,
  onLogInTextClick,
  onSignupClick,
}) => {
  const frameNavStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameNavPadding,
    };
  }, [frameNavPadding]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[8.137rem] pr-[4.562rem] pl-[4.75rem] box-border max-w-full mq750:pl-[2.375rem] mq750:pr-[2.25rem] mq750:box-border ${className}`}
    >
      <header className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-left text-[3rem] text-mediumslateblue-200 font-roboto">
        <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
          <a
            className="[text-decoration:none] relative font-black text-[inherit] whitespace-nowrap cursor-pointer"
            onClick={onSciMathIQTextClick}
          >
            SciMathIQ
          </a>
        </div>
        <nav
          className="m-0 flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] box-border max-w-full lg:hidden"
          style={frameNavStyle}
        >
          <nav className="m-0 flex flex-row items-start justify-start gap-[1.625rem] text-left text-[2rem] text-black font-roboto mq450:hidden">
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.438rem]">
                Home
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem]">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.375rem]">
                About
              </a>
            </div>
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.562rem] pl-[0rem]">
              <a className="[text-decoration:none] relative text-[inherit]">
                Resources
              </a>
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[4rem]">
              Quiz
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.5rem]">
              Info
            </a>
          </nav>
        </nav>
        <div className="flex flex-row items-start justify-start gap-[1.562rem] text-[2rem] text-orangered">
          <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
            <a
              className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[5.563rem] whitespace-nowrap"
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
      </header>
    </div>
  );
};

export default FrameComponent1;
