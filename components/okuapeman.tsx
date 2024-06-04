import type { NextPage } from "next";

export type OkuapemanType = {
  className?: string;
};

const Okuapeman: NextPage<OkuapemanType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.687rem] box-border max-w-full text-center text-[2rem] text-white font-roboto ${className}`}
    >
      <div className="flex-1 bg-gray-400 flex flex-col items-center justify-start pt-[2.75rem] px-[1.25rem] pb-[4rem] box-border gap-[2rem] max-w-full mq750:gap-[1rem] mq750:pt-[1.813rem] mq750:pb-[2.625rem] mq750:box-border">
        <div className="w-[90rem] h-[43rem] relative bg-gray-400 hidden max-w-full" />
        <div className="w-[64.625rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
          <div className="relative font-black z-[1] mq750:text-[1.625rem] mq450:text-[1.188rem]">
            Upcoming Quiz Events
          </div>
        </div>
        <div className="w-[64.625rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-left text-orangered">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
            <div className="relative font-extrabold inline-block min-w-[8rem] z-[1] mq750:text-[1.625rem] mq450:text-[1.188rem]">
              Regional
            </div>
          </div>
          <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0.5rem] relative gap-[1.062rem] max-w-full z-[1] text-[1.5rem] text-black border-[3px] border-solid border-black">
            <div className="self-stretch h-[28rem] relative bg-white box-border hidden z-[0] border-[3px] border-solid border-black" />
            <div className="w-[0.188rem] h-[calc(100%_+_3px)] absolute !m-[0] top-[0rem] bottom-[-0.187rem] left-[11.5rem] box-border z-[1] border-r-[3px] border-solid border-black" />
            <div className="w-[0.188rem] h-[calc(100%_+_3px)] absolute !m-[0] top-[0rem] bottom-[-0.187rem] left-[21.375rem] box-border z-[1] border-r-[3px] border-solid border-black" />
            <div className="w-[0.188rem] h-[calc(100%_+_3px)] absolute !m-[0] top-[0rem] right-[28.188rem] bottom-[-0.187rem] box-border z-[1] border-r-[3px] border-solid border-black" />
            <div className="w-[0.188rem] h-[calc(100%_+_3px)] absolute !m-[0] top-[0rem] right-[14.063rem] bottom-[-0.187rem] box-border z-[1] border-r-[3px] border-solid border-black" />
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.937rem] box-border relative gap-[0.312rem] max-w-full text-[2rem]">
              <div className="w-[46.75rem] flex flex-row items-start justify-start py-[0rem] px-[1.312rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                  <div className="w-[7.813rem] flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                    <div className="relative font-extrabold inline-block min-w-[5.188rem] z-[1] mq750:text-[1.625rem] mq450:text-[1.188rem]">
                      Dates
                    </div>
                  </div>
                  <div className="relative font-extrabold inline-block min-w-[6.375rem] z-[1] mq750:text-[1.625rem] mq450:text-[1.188rem]">
                    Region
                  </div>
                  <div className="w-[11.375rem] flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                    <div className="relative font-extrabold z-[1] mq750:text-[1.625rem] mq450:text-[1.188rem]">
                      School A
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <div className="relative font-extrabold inline-block min-w-[8.063rem] z-[1] mq750:text-[1.625rem] mq450:text-[1.188rem]">
                      School B
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.188rem] relative box-border z-[2] border-t-[3px] border-solid border-black" />
              <div className="absolute !m-[0] top-[0rem] right-[-7.687rem] font-extrabold inline-block min-w-[8.063rem] z-[1] mq750:text-[1.625rem] mq450:text-[1.188rem]">
                School C
              </div>
            </div>
            <div className="absolute !m-[0] right-[3.813rem] bottom-[0.75rem] z-[1] mq450:text-[1.188rem]">
              July 20, 2024.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[0.812rem] max-w-full">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[1.312rem] box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[2.687rem] max-w-full mq750:flex-wrap mq750:gap-[1.313rem]">
                  <div className="relative z-[1] mq450:text-[1.188rem]">
                    June 5, 2024.
                  </div>
                  <div className="w-[7.25rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                    <div className="relative inline-block min-w-[5.125rem] z-[1] mq450:text-[1.188rem]">
                      Eastern
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[2.125rem] max-w-full mq450:flex-wrap mq450:gap-[1.063rem]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative z-[1] mq450:text-[1.188rem]">
                        Pope John SHS
                      </div>
                      <div className="relative inline-block min-w-[4.938rem] z-[2] ml-[-2.938rem] mq450:text-[1.188rem]">
                        Meghis
                      </div>
                    </div>
                    <div className="relative inline-block min-w-[6rem] z-[1] mq450:text-[1.188rem]">
                      Nifa SHS
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.188rem] relative box-border z-[2] border-t-[3px] border-solid border-black" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] max-w-full">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[1.312rem] box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[1.812rem] max-w-full mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      June 15, 2024.
                    </div>
                  </div>
                  <div className="w-[8.125rem] flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                    <div className="relative inline-block min-w-[5.125rem] z-[1] mq450:text-[1.188rem]">
                      Eastern
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      Okuapeman SHS
                    </div>
                  </div>
                  <div className="relative z-[1] mq450:text-[1.188rem]">
                    Benkum SHS
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.188rem] relative box-border z-[2] border-t-[3px] border-solid border-black" />
            </div>
            <div className="w-[10.438rem] h-[1.75rem] absolute !m-[0] top-[9.563rem] right-[-26.687rem] inline-block mq450:text-[1.188rem]">
              Aburi SECTECH
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] max-w-full">
              <div className="w-[50.625rem] flex flex-row items-start justify-start py-[0rem] px-[1.312rem] box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[1.812rem] max-w-full">
                  <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      June 20, 2024.
                    </div>
                  </div>
                  <div className="w-[8.125rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                    <div className="relative inline-block min-w-[5.125rem] z-[1] mq450:text-[1.188rem]">
                      Eastern
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[1.25rem] pl-[0rem] box-border min-w-[8.25rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      ST Peter’s SHS
                    </div>
                  </div>
                  <div className="relative z-[1] mq450:text-[1.188rem]">
                    Mampong PreSec
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.188rem] relative box-border z-[2] border-t-[3px] border-solid border-black" />
            </div>
            <div className="w-[10.188rem] h-[1.75rem] absolute !m-[0] right-[-26.437rem] bottom-[12.25rem] inline-block mq450:text-[1.188rem]">
              Aburi Girls SHS
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[1.312rem] box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[2.375rem] max-w-full mq750:gap-[1.188rem] mq1100:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      July 10, 2024.
                    </div>
                  </div>
                  <div className="w-[7.563rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                    <div className="relative inline-block min-w-[5.125rem] z-[1] mq450:text-[1.188rem]">
                      Ashanti
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.437rem] pb-[0rem] pr-[0.687rem] pl-[0rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      Prempeh College
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      Opoku Ware SHS
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.188rem] relative box-border z-[2] border-t-[3px] border-solid border-black" />
            </div>
            <div className="w-[10rem] h-[1.75rem] absolute !m-[0] right-[-26.25rem] bottom-[7.813rem] inline-block mq450:text-[1.188rem]">{`Jachie Pramso `}</div>
            <div className="w-[3.625rem] h-[1.75rem] absolute !m-[0] right-[-19.5rem] bottom-[4.125rem] inline-block mq450:text-[1.188rem]">
              KSTS
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[0.437rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] max-w-full">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.312rem] box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[2.375rem] max-w-full mq750:flex-wrap mq750:gap-[1.188rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      July 17, 2024.
                    </div>
                    <div className="w-[7.563rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                      <div className="relative inline-block min-w-[5.125rem] z-[1] mq450:text-[1.188rem]">
                        Ashanti
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[0.437rem] pl-[0rem]">
                      <div className="relative z-[1] mq450:text-[1.188rem]">
                        Kumasi Academy
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                      <div className="relative z-[1] mq450:text-[1.188rem]">
                        Osei Tutu SHS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[0.188rem] relative box-border z-[2] border-t-[3px] border-solid border-black" />
              </div>
              <div className="w-[53.625rem] flex flex-row items-start justify-end py-[0rem] px-[1.937rem] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[0.375rem] pb-[0rem] pr-[1.25rem] pl-[0rem]">
                    <div className="relative inline-block min-w-[4.813rem] z-[1] mq450:text-[1.188rem]">
                      Central
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                    <div className="relative z-[1] mq450:text-[1.188rem]">
                      Mfantsipim SHS
                    </div>
                  </div>
                  <div className="w-[10rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                    <div className="relative inline-block min-w-[7.188rem] z-[1] mq450:text-[1.188rem]">
                      Apam SHS
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                    <div className="relative z-[2] mq450:text-[1.188rem]">
                      Adisadel College
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Okuapeman;
