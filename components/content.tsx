import type { NextPage } from "next";
import Fundamentalcard from "./fundamentalcard";
import Speedcard from "./speedcard";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.875rem] box-border max-w-full text-left text-[2rem] text-black font-roboto ${className}`}
    >
      <div className="w-[65.688rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[1rem] mq1050:gap-[2rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.437rem] pl-[1.812rem] box-border max-w-full text-[1.5rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] max-w-full mq750:gap-[1.063rem]">
            <div className="relative z-[1] mq450:text-[1.188rem]">{`Discover essential study materials tailored for success in the National Science and Math Quiz. `}</div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.25rem] box-border max-w-full mq1050:pl-[1.625rem] mq1050:pr-[1.625rem] mq1050:box-border">
              <div className="flex-1 bg-silver-200 flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[2.125rem] box-border max-w-full gap-[1.25rem] mq750:flex-wrap mq750:pl-[1.25rem] mq750:pr-[1.25rem] mq750:pb-[1.25rem] mq750:box-border">
                <div className="self-stretch w-[55.938rem] relative bg-silver-200 hidden max-w-full" />
                <input
                  className="w-[16rem] [border:none] [outline:none] bg-[transparent] h-[3.438rem] flex flex-col items-start justify-start pt-[1.687rem] px-[0rem] pb-[0rem] box-border font-roboto text-[1.5rem] text-gray-500"
                  placeholder="Type to search resource"
                  type="text"
                />
                <div className="bg-mediumslateblue-200 flex flex-row items-start justify-start py-[1.187rem] pr-[2.375rem] pl-[2.437rem] z-[1]">
                  <div className="h-[5.125rem] w-[7.563rem] relative bg-mediumslateblue-200 hidden" />
                  <img
                    className="h-[2.75rem] w-[2.75rem] relative object-contain z-[2]"
                    alt=""
                    src="/outputonlinepngtools-5-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.312rem] pr-[0rem] pl-[0.375rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] max-w-full mq750:gap-[1.063rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem]">
              <div className="relative font-medium mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                Past Papers
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.562rem] text-[1.5rem]">
              <Fundamentalcard
                openBook1="/openbook-1@2x.png"
                fundamental="Fundamental "
                concepts="Concepts"
              />
              <Speedcard
                openBook1="/openbook-1-1@2x.png"
                speedRound="Speed Round"
              />
              <Fundamentalcard
                openBook1="/openbook-1-2@2x.png"
                fundamental="Problem Of The "
                concepts="Day"
              />
              <Speedcard
                openBook1="/openbook-1-3@2x.png"
                speedRound="True or False"
                propDisplay="unset"
                propMinWidth="unset"
              />
              <Speedcard
                openBook1="/openbook-1-4@2x.png"
                speedRound="Riddles"
                propDisplay="inline-block"
                propMinWidth="5rem"
              />
            </div>
          </div>
        </div>
        <div className="w-[44.563rem] flex flex-row items-start justify-start pt-[0rem] px-[0.375rem] pb-[1.375rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.75rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[22.5rem] mq750:pl-[11.25rem] mq750:box-border mq450:pl-[1.25rem] mq450:box-border">
              <div className="relative font-medium mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                Study Videos
              </div>
            </div>
            <div className="w-[43.813rem] relative inline-block max-h-[24.875rem] [word-break:break-word] text-[1.25rem] text-darkslateblue mq450:text-[1rem]">
              <p className="m-0">
                <span className="text-[2rem]">
                  <b className="font-roboto text-orangered">{`2000
`}</b>
                </span>
                <span className="font-medium">
                  <span className="text-[2rem]">
                    <span className="text-black">&nbsp;</span>
                  </span>
                  <span>{`https://www.youtube.com/watch?v=RoxEt8IbOKg&pp=ygUJbnNtcSAyMDAw`}</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>{`https://www.youtube.com/watch?v=6rJ5oGKA1TY&pp=ygUJbnNtcSAyMDAw`}</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>{`https://www.youtube.com/watch?v=0AUCd3bWy74&pp=ygUJbnNtcSAyMDAw`}</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>{`https://www.youtube.com/watch?v=a2HKH0WfVb0&pp=ygUJbnNtcSAyMDAw`}</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>{`https://www.youtube.com/watch?v=BdbVVewEnXU&pp=ygUJbnNtcSAyMDAw`}</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>{`https://www.youtube.com/watch?v=HxzaVU61bYc&pp=ygUJbnNtcSAyMDAw`}</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>{`https://www.youtube.com/watch?v=5oyfjOYv_k0&pp=ygUJbnNtcSAyMDAw`}</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0">
                <span className="font-medium">
                  <span>{`https://www.youtube.com/watch?v=y3FkeoO7F90&pp=ygUJbnNtcSAyMDAw`}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[42.688rem] relative inline-block max-w-full max-h-[6.875rem] [word-break:break-word] text-[1.25rem] text-darkslateblue mq450:text-[1rem]">
          <p className="m-0">
            <span className="text-[2rem]">
              <b className="font-roboto text-orangered">{`2001
`}</b>
            </span>
            <span className="font-medium">
              <span className="text-[2rem]">
                <span className="text-black">&nbsp;</span>
              </span>
              <span>{`https://www.youtube.com/watch?v=y9xso4ymlaQ&pp=ygUJbnNtcSAyMDAx`}</span>
            </span>
          </p>
          <p className="m-0">
            <span className="font-medium">
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="m-0">
            <span className="font-medium">
              <span>{`https://www.youtube.com/watch?v=yTqzICaGYyA&pp=ygUJbnNtcSAyMDAx`}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
