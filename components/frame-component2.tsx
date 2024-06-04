import type { NextPage } from "next";
import CommunityContainer from "./community-container";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[2.812rem] max-w-full text-left text-[1.5rem] text-black font-roboto mq750:gap-[1.375rem] ${className}`}
    >
      <CommunityContainer
        communityContainerPadding="2.812rem 17.625rem 3.562rem 19.312rem"
        communityContainerGap="0.687rem"
        communityContainerAlignSelf="stretch"
        rectangleDivWidth="90.188rem"
        communityWrapperWidth="51.5rem"
        frameDivGap="1.187rem"
        frameDivAlignSelf="stretch"
        socialIconsContainerWidth="51.375rem"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem]">
        <div className="relative font-extrabold mq450:text-[1.188rem]">{`Copyright © 2024 Obed Nuertey. Designed by Jiggaman. `}</div>
      </div>
    </section>
  );
};

export default FrameComponent2;
