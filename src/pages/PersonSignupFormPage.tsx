import PersonSignupMainSection from "@c/organisms/SignupPageOrganisms/PersonSignupMainSection";
import SignupFormWrappersTemplate from "@c/templates/SignupFormWrappersTemplate";
import { memo } from "react";

// ! signup form 4 person
const PersonSignupFormPage = memo(() => {
  return (
    <SignupFormWrappersTemplate>
      <PersonSignupMainSection />
    </SignupFormWrappersTemplate>
  );
});

export default PersonSignupFormPage;
