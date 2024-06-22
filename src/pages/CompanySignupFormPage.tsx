import CompanySignupMainSection from "@c/organisms/SignupPageOrganisms/CompanySignupMainSection";
import SignupFormsTemplate from "@c/templates/SignupFormsTemplate";
import { memo } from "react";

const CompanySignupFormPage = memo(() => {
  return (
    <SignupFormsTemplate>
      <CompanySignupMainSection />
    </SignupFormsTemplate>
  );
});

export default CompanySignupFormPage;
