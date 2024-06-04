import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/frame-component1";
import Loginbox1 from "../components/loginbox1";
import FrameComponent from "../components/frame-component";

const Signup: NextPage = () => {
  const router = useRouter();

  const onSciMathIQTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLogInTextClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[2.062rem] px-[0rem] pb-[4.062rem] box-border gap-[15.812rem] leading-[normal] tracking-[normal] mq450:gap-[3.938rem] mq750:gap-[7.875rem]">
      <FrameComponent1
        frameNavPadding="1.062rem 0rem 0rem"
        onSciMathIQTextClick={onSciMathIQTextClick}
        onLogInTextClick={onLogInTextClick}
      />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.875rem] pl-[1.25rem] box-border max-w-full">
        <Loginbox1 />
      </section>
      <FrameComponent copyright2024Margin="unset" />
    </div>
  );
};

export default Signup;
