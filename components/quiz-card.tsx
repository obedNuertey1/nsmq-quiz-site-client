import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type QuizCardType = {
  className?: string;
  idea1?: string;
  quiz?: string;
  engageWithTargetedQuizzes?: string;
  designedForTheNational?: string;
  scienceAndMathQuiz?: string;
  enhanceYourSkillsAnd?: string;
  gaugeYourProgressInOur?: string;
  adaptivePlatform?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const QuizCard: NextPage<QuizCardType> = ({
  className = "",
  idea1,
  quiz,
  engageWithTargetedQuizzes,
  designedForTheNational,
  scienceAndMathQuiz,
  enhanceYourSkillsAnd,
  gaugeYourProgressInOur,
  adaptivePlatform,
  propPadding,
  propGap,
  propDisplay,
  propMinWidth,
}) => {
  const cardTitlesStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const quizStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`h-[24.438rem] flex-1 relative min-w-[18.313rem] max-w-[19.938rem] text-left text-[2.25rem] text-white font-roboto ${className}`}
    >
      <div className="absolute top-[0rem] left-[2.25rem] w-[6.813rem] flex flex-row items-start justify-start">
        <div className="h-[6.813rem] flex-1 relative">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray-100 box-border w-full h-full z-[1] border-[0px] border-solid border-black" />
          <img
            className="absolute top-[1.813rem] left-[1.75rem] w-[3.25rem] h-[3.25rem] object-contain z-[2]"
            loading="lazy"
            alt=""
            src={idea1}
          />
        </div>
      </div>
      <div
        className="absolute top-[3.438rem] left-[0rem] rounded-8xs bg-gray-400 w-full flex flex-col items-start justify-start pt-[3.875rem] pb-[5.125rem] pr-[1.25rem] pl-[1.625rem] box-border gap-[0.75rem]"
        style={cardTitlesStyle}
      >
        <div className="w-[19.938rem] h-[21rem] relative rounded-8xs bg-gray-400 hidden" />
        <b
          className="relative font-extrabold inline-block min-w-[4.625rem] z-[1] mq450:text-[1.375rem] mq1050:text-[1.813rem]"
          style={quizStyle}
        >
          {quiz}
        </b>
        <p className="m-0 h-[8.625rem] relative text-[1.25rem] inline-block shrink-0 z-[1] mq450:text-[1rem]">
          <span className="block">{engageWithTargetedQuizzes}</span>
          <span className="block">{designedForTheNational}</span>
          <span className="block">{scienceAndMathQuiz}</span>
          <span className="block">{enhanceYourSkillsAnd}</span>
          <span className="block">{gaugeYourProgressInOur}</span>
          <span className="block">{adaptivePlatform}</span>
        </p>
      </div>
    </div>
  );
};

export default QuizCard;
