import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { memo } from "react";

// ! form with one input that will get the national code for workshop sign up form
const SignupWorkshopNationalCode = memo(() => {
  return (
    <NationalCodeSignupForm
      title="کارگاه"
      inputLabel="کد ملی"
      href="/workshop-signup-form"
      className="workshop-code-submit-btn"
    />
  );
});

export default SignupWorkshopNationalCode;
