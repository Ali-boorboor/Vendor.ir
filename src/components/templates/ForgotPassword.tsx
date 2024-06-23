import ForgotPasswordForm from "@c/organisms/ForgotPasswordPageOrganisms/ForgotPasswordForm";
import AuthFormsRightSection from "@c/organisms/AuthFormsRightSection";
import { memo } from "react";

const ForgotPassword = memo(() => {
  return (
    <main className="flex flex-wrap lg:flex-nowrap flex-row h-screen lg:gap-0 gap-4">
      <AuthFormsRightSection text="فراموشی رمز" />
      <ForgotPasswordForm />
    </main>
  );
});

export default ForgotPassword;
