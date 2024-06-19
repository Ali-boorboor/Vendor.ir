import SignupFooter from "../organisms/SignupPageOrganisms/SignupFooter";
import SignupHeader from "../organisms/SignupPageOrganisms/SignupHeader";
import SignupMain from "../organisms/SignupPageOrganisms/SignupMain";
import { memo } from "react";

const Signup = memo(() => {
  return (
    <>
      <SignupHeader />
      <SignupMain />
      <SignupFooter />
    </>
  );
});

export default Signup;
