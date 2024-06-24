import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { memo } from "react";

// ! form with one input that will get the national code for company sign up form
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
