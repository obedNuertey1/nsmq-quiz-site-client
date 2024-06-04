import type { NextPage } from "next";

export type GoogleType = {
  className?: string;
  search11?: string;
  continueWithGoogle?: string;
};

const Google: NextPage<GoogleType> = ({
  className = "",
  search11,
  continueWithGoogle,
}) => {
  return (
    <div
      className={`self-stretch rounded-8xs bg-white flex flex-row items-start justify-start pt-[1.937rem] px-[2.937rem] pb-[1.875rem] box-border gap-[0.812rem] max-w-full z-[1] text-left text-[2rem] text-black font-roboto mq450:pl-[1.438rem] mq450:pr-[1.438rem] mq450:box-border mq750:flex-wrap ${className}`}
    >
      <div className="h-[6.5rem] w-[36.25rem] relative rounded-8xs bg-white hidden max-w-full" />
      <img
        className="h-[2.688rem] w-[2.688rem] relative object-contain min-h-[2.688rem] z-[1]"
        loading="lazy"
        alt=""
        src={search11}
      />
      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
        <div className="relative z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
          {continueWithGoogle}
        </div>
      </div>
    </div>
  );
};

export default Google;
