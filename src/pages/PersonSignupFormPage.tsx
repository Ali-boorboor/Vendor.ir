import PersonSignupMainSection from "../components/organisms/SignupPageOrganisms/PersonSignupMainSection";
import SignupFormsTemplate from "../components/templates/SignupFormsTemplate";
import { memo } from "react";

const PersonSignupFormPage = memo(() => {
  return (
    <SignupFormsTemplate>
      <PersonSignupMainSection />
    </SignupFormsTemplate>
  );
});

export default PersonSignupFormPage;
