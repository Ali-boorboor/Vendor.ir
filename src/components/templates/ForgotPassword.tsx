import ForgotPasswordForm from "@c/organisms/ForgotPasswordPageOrganisms/ForgotPasswordForm";
import RightSectionForms from "@c/organisms/RightSectionForms";
import { memo } from "react";

const ForgotPassword = memo(() => {
  return (
    <main className="flex flex-wrap lg:flex-nowrap flex-row h-screen lg:gap-0 gap-4">
      <RightSectionForms text="فراموشی رمز" />
      <ForgotPasswordForm />
    </main>
  );
});

export default ForgotPassword;
