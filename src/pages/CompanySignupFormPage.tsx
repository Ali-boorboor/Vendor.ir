import CompanySignupMainSection from "@c/organisms/SignupPageOrganisms/CompanySignupMainSection";
import SignupFormWrappersTemplate from "@c/templates/SignupFormWrappersTemplate";
import { memo } from "react";

// ! signup form 4 company
const CompanySignupFormPage = memo(() => {
  return (
    <SignupFormWrappersTemplate>
      <CompanySignupMainSection />
    </SignupFormWrappersTemplate>
  );
});

export default CompanySignupFormPage;
