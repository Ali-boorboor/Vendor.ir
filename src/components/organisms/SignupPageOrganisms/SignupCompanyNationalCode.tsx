import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { memo } from "react";

const SignupCompanyNationalCode = memo(() => {
  return (
    <NationalCodeSignupForm
      title="شرکت"
      inputLabel="شناسه ملی"
      href="/company-signup-form"
      className="company-code-submit-btn"
    />
  );
});

export default SignupCompanyNationalCode;
