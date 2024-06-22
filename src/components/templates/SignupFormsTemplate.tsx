import SignupHeader from "@c/organisms/SignupPageOrganisms/SignupHeader";
import SignupFooter from "@c/organisms/SignupPageOrganisms/SignupFooter";
import { memo } from "react";
import { PersonSignupFormType } from "@/types/TemplateType";

const SignupFormsTemplate = memo(({ children }: PersonSignupFormType) => {
  return (
    <>
      <SignupHeader />
      {children}
      <SignupFooter />
    </>
  );
});

export default SignupFormsTemplate;
