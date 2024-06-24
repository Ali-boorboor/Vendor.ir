import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { memo } from "react";

// ! form with one input that will get the national code for person sign up form
const SignupPersonNationalCode = memo(() => {
  return (
    <NationalCodeSignupForm
      title="شخص"
      inputLabel="کد ملی"
      href="/person-signup-form"
      className="person-code-submit-btn"
    />
  );
});

export default SignupPersonNationalCode;
