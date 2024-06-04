import type { NextPage } from "next";
import QuizCard from "./quiz-card";

export type SaladImageParentType = {
  className?: string;
};

const SaladImageParent: NextPage<SaladImageParentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.312rem] box-border max-w-full text-left text-[2.5rem] text-black font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq750:gap-[1.25rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[2.562rem]">
          <div className="relative font-extrabold mq450:text-[1.5rem] mq1050:text-[2rem]">
            FEATURES
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.875rem] text-[2.25rem] text-white">
          <QuizCard
            idea1="/idea-1@2x.png"
            quiz="Quiz"
            engageWithTargetedQuizzes="Engage with targeted quizzes "
            designedForTheNational="designed for the National "
            scienceAndMathQuiz="Science and Math Quiz."
            enhanceYourSkillsAnd="Enhance your skills and "
            gaugeYourProgressInOur="gauge your progress in our "
            adaptivePlatform="adaptive platform"
          />
          <QuizCard
            idea1="/idea-1-1@2x.png"
            quiz="Resources"
            engageWithTargetedQuizzes="Explore curated study materials"
            designedForTheNational="for the National Science and"
            scienceAndMathQuiz=" Math Quiz. Access practice "
            enhanceYourSkillsAnd="questions, study guides and"
            gaugeYourProgressInOur="videos to support your "
            adaptivePlatform="preparation."
            propPadding="3.875rem 1.062rem 5.437rem 1.312rem"
            propGap="0.375rem"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <QuizCard
            idea1="/idea-1-2@2x.png"
            quiz="Community"
            engageWithTargetedQuizzes="Connect with fellow learners"
            designedForTheNational="preparing for the National"
            scienceAndMathQuiz="Science and Math Quiz."
            enhanceYourSkillsAnd="Share tips, ask questions and "
            gaugeYourProgressInOur="collaborate in our community"
            adaptivePlatform="forum."
            propPadding="4rem 1.25rem 5.125rem 1.375rem"
            propGap="0.625rem"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <QuizCard
            idea1="/idea-1-3@2x.png"
            quiz="Info"
            engageWithTargetedQuizzes="Stay updated with the latest"
            designedForTheNational=" NSMQ news, announcements,"
            scienceAndMathQuiz=" and insights on our Info page."
            enhanceYourSkillsAnd=" Discover valuable information"
            gaugeYourProgressInOur=" and stay ahead in your"
            adaptivePlatform=" preparation journey."
            propPadding="4rem 1.25rem 5.125rem 1.375rem"
            propGap="0.625rem"
            propDisplay="inline-block"
            propMinWidth="4.063rem"
          />
        </div>
      </div>
    </section>
  );
};

export default SaladImageParent;
