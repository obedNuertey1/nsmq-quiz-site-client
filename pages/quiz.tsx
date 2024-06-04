import type { NextPage } from "next";
import QuizStructure from "../components/quiz-structure";
import MainContent from "../components/main-content";
import Rounds from "../components/rounds";
import QuestionContainer from "../components/question-container";
import InputContainer from "../components/input-container";
import CommunityContainer from "../components/community-container";

const Quiz: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2.062rem] px-[0rem] pb-[2.875rem] box-border gap-[3.25rem] leading-[normal] tracking-[normal] text-left text-[1.5rem] text-black font-roboto mq725:gap-[1.625rem]">
      <QuizStructure />
      <MainContent />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[10.25rem] pr-[0rem] pl-[0.062rem] box-border max-w-full mq450:pb-[4.375rem] mq450:box-border mq1000:pb-[6.688rem] mq1000:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[5.312rem] max-w-full mq450:gap-[1.313rem] mq725:gap-[2.625rem]">
          <Rounds />
          <QuestionContainer />
        </div>
      </section>
      <InputContainer />
      <CommunityContainer />
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[4.75rem] mq725:pl-[2.375rem] mq725:box-border">
        <p className="m-0 relative font-extrabold mq450:text-[1.188rem]">{`Copyright © 2024 Obed Nuertey. Designed by Jiggaman. `}</p>
      </div>
    </div>
  );
};

export default Quiz;
