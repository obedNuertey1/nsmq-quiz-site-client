import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CommunityContainerType = {
  className?: string;

  /** Style props */
  communityContainerPadding?: CSSProperties["padding"];
  communityContainerGap?: CSSProperties["gap"];
  communityContainerAlignSelf?: CSSProperties["alignSelf"];
  rectangleDivWidth?: CSSProperties["width"];
  communityWrapperWidth?: CSSProperties["width"];
  frameDivGap?: CSSProperties["gap"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  socialIconsContainerWidth?: CSSProperties["width"];
};

const CommunityContainer: NextPage<CommunityContainerType> = ({
  className = "",
  communityContainerPadding,
  communityContainerGap,
  communityContainerAlignSelf,
  rectangleDivWidth,
  communityWrapperWidth,
  frameDivGap,
  frameDivAlignSelf,
  socialIconsContainerWidth,
}) => {
  const communityContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: communityContainerPadding,
      gap: communityContainerGap,
      alignSelf: communityContainerAlignSelf,
    };
  }, [
    communityContainerPadding,
    communityContainerGap,
    communityContainerAlignSelf,
  ]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
    };
  }, [rectangleDivWidth]);

  const communityWrapperStyle: CSSProperties = useMemo(() => {
    return {
      width: communityWrapperWidth,
    };
  }, [communityWrapperWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivGap, frameDivAlignSelf]);

  const socialIconsContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: socialIconsContainerWidth,
    };
  }, [socialIconsContainerWidth]);

  return (
    <section
      className={`bg-gray-400 flex flex-col items-start justify-start pt-[3.375rem] pb-[3.187rem] pr-[16.562rem] pl-[20.312rem] box-border gap-[0.625rem] max-w-full text-left text-[2.5rem] text-white font-roboto mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq725:pl-[10.125rem] mq725:pr-[8.25rem] mq725:box-border ${className}`}
      style={communityContainerStyle}
    >
      <div
        className="w-[90rem] h-[16.188rem] relative bg-gray-400 hidden max-w-full"
        style={rectangleDiv1Style}
      />
      <div
        className="w-[51.25rem] flex flex-row items-start justify-center max-w-full"
        style={communityWrapperStyle}
      >
        <div className="relative font-extrabold z-[1] mq450:text-[1.5rem] mq1000:text-[2rem]">
          JOIN THE COMMUNITY
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start gap-[1.062rem] max-w-full text-[1.5rem]"
        style={frameDivStyle}
      >
        <div className="relative font-extrabold z-[1] mq450:text-[1.188rem]">
          Connect with fellow learners preparing for the National Science and
          Math Quiz
        </div>
        <div
          className="w-[51.125rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full"
          style={socialIconsContainerStyle}
        >
          <div className="flex flex-row items-start justify-center gap-[0.687rem] mq450:flex-wrap">
            <img
              className="h-[3.125rem] w-[3.125rem] relative object-cover min-h-[3.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/outputonlinepngtools-1@2x.png"
            />
            <img
              className="h-[3.125rem] w-[3.125rem] relative object-cover min-h-[3.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/outputonlinepngtools-1-1@2x.png"
            />
            <img
              className="h-[3.125rem] w-[3.125rem] relative object-cover min-h-[3.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/outputonlinepngtools-2-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem]">
              <img
                className="w-[3.125rem] h-[3.125rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/outputonlinepngtools-3-1@2x.png"
              />
            </div>
            <img
              className="h-[3.125rem] w-[3.125rem] relative object-cover min-h-[3.125rem] z-[1]"
              loading="lazy"
              alt=""
              src="/outputonlinepngtools-4-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityContainer;
