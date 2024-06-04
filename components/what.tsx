import type { NextPage } from "next";

export type WhatType = {
  className?: string;
};

const What: NextPage<WhatType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[0.687rem] pr-[1.687rem] pl-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-white font-roboto ${className}`}
    >
      <div className="w-[65.063rem] flex flex-row items-start justify-center gap-[2.937rem] max-w-full mq750:gap-[1.438rem] mq1100:flex-wrap">
        <div className="h-[21.125rem] w-[19.438rem] bg-gold-100 flex flex-col items-end justify-start pt-[2.125rem] pb-[0rem] pr-[0.062rem] pl-[0rem] box-border min-w-[19.438rem] mq1100:flex-1 mq1100:pr-[0rem] mq1100:box-border">
          <div className="self-stretch h-[21.125rem] relative bg-gold-100 hidden" />
          <img
            className="w-[17.875rem] flex-1 relative max-h-full object-contain z-[2]"
            alt=""
            src="/logo-2@2x.png"
          />
          <div className="self-stretch bg-orangered flex flex-row items-start justify-start pt-[0.687rem] px-[1.25rem] pb-[2.187rem] z-[1]">
            <div className="h-[5.75rem] w-[19.375rem] relative bg-orangered hidden" />
            <div className="relative font-extrabold z-[2] mq450:text-[1rem]">
              <p className="m-0">{`Introduction of New Quiz `}</p>
              <p className="m-0">Rounds</p>
            </div>
          </div>
        </div>
        <p className="m-0 h-[15rem] flex-1 relative text-[1.5rem] text-black inline-block min-w-[27.75rem] max-w-full mq750:min-w-full mq450:text-[1.188rem]">
          The NSMQ organizers have announced the introduction of new quiz rounds
          to the 2024 edition. These include a "Science Project Presentation"
          round, where students present innovative science projects, and an
          "Interactive Audience Quiz" that allows live audience participation.
          These new rounds aim to enhance the learning experience and engagement
          of both participants and spectators.
        </p>
      </div>
    </section>
  );
};

export default What;
