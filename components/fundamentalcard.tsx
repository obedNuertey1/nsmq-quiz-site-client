import type { NextPage } from "next";

export type FundamentalcardType = {
  className?: string;
  openBook1?: string;
  fundamental?: string;
  concepts?: string;
};

const Fundamentalcard: NextPage<FundamentalcardType> = ({
  className = "",
  openBook1,
  fundamental,
  concepts,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[0.625rem] min-w-[11.563rem] max-w-[11.813rem] text-left text-[1.5rem] text-black font-roboto ${className}`}
    >
      <div className="self-stretch rounded-8xs bg-lightgray-200 flex flex-row items-start justify-start py-[1.375rem] px-[2.812rem]">
        <div className="h-[8.875rem] w-[11.813rem] relative rounded-8xs bg-lightgray-200 hidden" />
        <img
          className="h-[6.125rem] w-[6.125rem] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src={openBook1}
        />
      </div>
      <div className="relative font-medium mq450:text-[1.188rem]">
        <p className="m-0">{fundamental}</p>
        <p className="m-0">{concepts}</p>
      </div>
    </div>
  );
};

export default Fundamentalcard;
