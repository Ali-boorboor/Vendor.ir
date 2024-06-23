import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { memo } from "react";

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
