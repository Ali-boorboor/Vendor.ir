import SignupHeader from "@c/organisms/SignupPageOrganisms/SignupHeader";
import SignupFooter from "@c/organisms/SignupPageOrganisms/SignupFooter";
import { memo } from "react";
import { PersonSignupFormWrapperType } from "@/types/TemplateType";

// ! a wrapper for signup forms that will get the children & show as main section of the form & add footer & header to it too
// ! its for forms (PersonSignupMainSection &...)
const SignupFormWrappersTemplate = memo(({ children }: PersonSignupFormWrapperType) => {
  return (
    <>
      <SignupHeader />
      {children}
      <SignupFooter />
    </>
  );
});

export default SignupFormWrappersTemplate;
