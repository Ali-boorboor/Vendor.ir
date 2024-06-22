import SignupNationalCode from "@c/molecules/SignupPageMolecules/SignupNationalCode";
import { memo } from "react";

const SignupPerson = memo(() => {
  return (
    <SignupNationalCode
      title="شخص"
      inputLabel="کد ملی"
      href="/person-signup-form"
      className="person-code-submit-btn"
    />
  );
});

export default SignupPerson;
