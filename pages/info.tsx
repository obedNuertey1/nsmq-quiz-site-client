import type { NextPage } from "next";
import Main from "../components/main";
import Okuapeman from "../components/okuapeman";
import Record from "../components/record";
import What from "../components/what";
import FrameComponent7 from "../components/frame-component";

const Info: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2.062rem] px-[0rem] pb-[6.875rem] box-border gap-[2.562rem] leading-[normal] tracking-[normal] mq750:gap-[1.25rem]">
      <Main />
      <Okuapeman />
      <Record />
      <What />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.187rem] box-border max-w-full text-left text-[2rem] text-white font-roboto">
        <div className="flex-1 bg-black flex flex-col items-center justify-start pt-[2.75rem] px-[1.25rem] pb-[3.875rem] box-border gap-[3.875rem] max-w-full mq750:gap-[0.938rem] mq750:pt-[1.25rem] mq750:pb-[1.625rem] mq750:box-border mq1275:gap-[1.938rem] mq1275:pt-[1.813rem] mq1275:pb-[2.5rem] mq1275:box-border">
          <div className="w-[90rem] h-[81.75rem] relative bg-black hidden max-w-full" />
          <div className="w-[67.875rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
            <div className="relative font-extrabold z-[1] mq750:text-[1.625rem] mq450:text-[1.188rem]">
              Frequently Asked Questions
            </div>
          </div>
          <p className="m-0 w-[67.875rem] relative text-[1.5rem] inline-block max-w-full z-[1] mq450:text-[1.188rem]">
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>What is NSMQ?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                NSMQ stands for National Science and Math Quiz. It is an annual
                science and mathematics competition for senior high schools in
                Ghana.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>When was NSMQ established?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                NSMQ was established in 1994 by the Ghana Education Service
                (GES) to promote the study of science and mathematics among
                senior high school students.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>How many rounds are there in NSMQ?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                NSMQ consists of five rounds: The Problem of the Day, Speed
                Race, True or False, Riddles, and the Standard Rounds.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>What subjects are covered in NSMQ?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                NSMQ covers a wide range of subjects including mathematics,
                physics, chemistry, biology, and general science.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>How are schools selected to participate in NSMQ?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                Schools qualify for NSMQ through regional and zonal competitions
                organized by the Ghana Education Service.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>What is the format of NSMQ questions?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                NSMQ questions range from multiple-choice to short-answer
                questions, and can be both theoretical and practical.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>How is NSMQ scored?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                Points are awarded for correct answers, and deductions may occur
                for incorrect answers in some rounds. The team with the highest
                score at the end of the competition wins.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>Who hosts and organizes NSMQ?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                NSMQ is hosted and organized by the Primetime Limited, in
                partnership with the Ghana Education Service and the Ministry of
                Education.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>What are the prizes for winners of NSMQ?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                Prizes for NSMQ winners typically include cash awards,
                educational scholarships, and trophies.
              </li>
            </ul>
            <span className="block">&nbsp;</span>
            <ol className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>How can schools and students prepare for NSMQ?</li>
            </ol>
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li>
                Schools and students can prepare for NSMQ by studying past
                questions, practicing problem-solving skills, and participating
                in mock quizzes and study groups.
              </li>
            </ul>
          </p>
        </div>
      </section>
      <FrameComponent7 />
    </div>
  );
};

export default Info;
