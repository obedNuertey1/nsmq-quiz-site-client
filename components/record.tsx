import type { NextPage } from "next";

export type RecordType = {
  className?: string;
};

const Record: NextPage<RecordType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[4.625rem] pr-[1.687rem] pl-[1.25rem] box-border max-w-full text-left text-[2.25rem] text-black font-roboto mq750:pb-[3rem] mq750:box-border ${className}`}
    >
      <div className="w-[65.063rem] flex flex-col items-start justify-start gap-[1.937rem] max-w-full mq750:gap-[0.938rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.437rem]">
          <h3 className="m-0 relative text-inherit font-medium font-inherit mq750:text-[1.813rem] mq450:text-[1.375rem]">
            NSMQ News Updates
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[2.937rem] max-w-full text-[1.25rem] text-white mq750:gap-[1.438rem] mq1100:flex-wrap">
          <div className="h-[21.125rem] bg-gold-100 flex flex-col items-end justify-start pt-[2.125rem] pb-[0rem] pr-[0.062rem] pl-[0rem] box-border min-w-[19.438rem] mq1100:flex-1 mq1100:pr-[0rem] mq1100:box-border">
            <div className="self-stretch h-[21.125rem] relative bg-gold-100 hidden" />
            <img
              className="w-[17.875rem] flex-1 relative max-h-full object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/logo-2@2x.png"
            />
            <div className="bg-orangered flex flex-row items-start justify-start py-[0.625rem] pr-[0.562rem] pl-[1.437rem] z-[1]">
              <div className="h-[5.75rem] w-[19.375rem] relative bg-orangered hidden" />
              <div className="relative font-extrabold z-[2] mq450:text-[1rem]">
                <p className="m-0">Record-Breaking Performance</p>
                <p className="m-0">{`in the 2024 NSMQ Regional `}</p>
                <p className="m-0">Competitions</p>
              </div>
            </div>
          </div>
          <p className="m-0 h-[15.375rem] flex-1 relative text-[1.5rem] text-black inline-block min-w-[27.75rem] max-w-full mq750:min-w-full mq450:text-[1.188rem]">
            The 2024 NSMQ Regional Competitions have seen record-breaking
            performances from several schools. Notably, Keta Senior High School
            achieved the highest score in the competition's history with a total
            of 89 points in the Eastern Region contest. This remarkable
            achievement sets a high bar for the upcoming national finals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Record;
