import SignupFooter from "../organisms/SignupPageOrganisms/SignupFooter";
import SignupHeader from "../organisms/SignupPageOrganisms/SignupHeader";
import SignupMain from "../organisms/SignupPageOrganisms/SignupMain";
import { Outlet } from "react-router";
import { memo } from "react";

const Signup = memo(() => {
  return (
    <>
      <SignupHeader />
      <SignupMain />
      <Outlet />
      <SignupFooter />
    </>
  );
});

export default Signup;
