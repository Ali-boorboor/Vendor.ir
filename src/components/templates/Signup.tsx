import SignupFooter from "@c/organisms/SignupPageOrganisms/SignupFooter";
import SignupHeader from "@c/organisms/SignupPageOrganisms/SignupHeader";
import SignupMain from "@c/organisms/SignupPageOrganisms/SignupMain";
import { Outlet } from "react-router";
import { memo } from "react";

// ! signup template witch will render in signup page (/signup) component
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
