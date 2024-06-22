import SignupHeader from "../organisms/SignupPageOrganisms/SignupHeader";
import SignupFooter from "../organisms/SignupPageOrganisms/SignupFooter";
import PersonSignupMainSection from "../organisms/SignupPageOrganisms/PersonSignupMainSection";
import { memo } from "react";

const PersonSignupForm = memo(() => {
  return (
    <>
      <SignupHeader />
      <PersonSignupMainSection />
      <SignupFooter />
    </>
  );
});

export default PersonSignupForm;
