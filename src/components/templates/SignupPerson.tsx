import SignupNationalCode from "../molecules/SignupPageMolecules/SignupNationalCode";
import { memo } from "react";

const SignupPerson = memo(() => {
  return <SignupNationalCode title="شخص" inputLabel="کد ملی" href="/person-signup-form" />;
});

export default SignupPerson;
