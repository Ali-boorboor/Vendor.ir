import PersonSignupMainSection from "@c/organisms/SignupPageOrganisms/PersonSignupMainSection";
import SignupFormsTemplate from "@c/templates/SignupFormsTemplate";
import { memo } from "react";

const PersonSignupFormPage = memo(() => {
  return (
    <SignupFormsTemplate>
      <PersonSignupMainSection />
    </SignupFormsTemplate>
  );
});

export default PersonSignupFormPage;
