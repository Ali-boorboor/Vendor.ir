import CompanySignupMainSection from "../components/organisms/SignupPageOrganisms/CompanySignupMainSection";
import SignupFormsTemplate from "../components/templates/SignupFormsTemplate";
import { memo } from "react";

const CompanySignupFormPage = memo(() => {
  return (
    <SignupFormsTemplate>
      <CompanySignupMainSection />
    </SignupFormsTemplate>
  );
});

export default CompanySignupFormPage;
