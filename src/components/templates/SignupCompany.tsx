import SignupNationalCode from "../molecules/SignupPageMolecules/SignupNationalCode";
import { memo } from "react";

const SignupCompany = memo(() => {
  return <SignupNationalCode title="شرکت" inputLabel="شناسه ملی" href="/company-signup-form" className="company-code-submit-btn" />;
});

export default SignupCompany;
