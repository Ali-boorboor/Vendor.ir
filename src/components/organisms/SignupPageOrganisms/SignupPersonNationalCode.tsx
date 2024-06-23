import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { memo } from "react";

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
