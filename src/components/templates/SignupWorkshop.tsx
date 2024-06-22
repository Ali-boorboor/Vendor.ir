import SignupNationalCode from "../molecules/SignupPageMolecules/SignupNationalCode";
import { memo } from "react";

const SignupWorkshop = memo(() => {
  return (
    <SignupNationalCode
      title="کارگاه"
      inputLabel="کد ملی"
      href="/workshop-signup-form"
      className="workshop-code-submit-btn"
    />
  );
});

export default SignupWorkshop;
