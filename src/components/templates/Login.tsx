import LoginForm from "@c/organisms/LoginPageOrganisms/LoginForm";
import RightSectionForms from "@c/organisms/RightSectionForms";
import { memo } from "react";

const Login = memo(() => {
  return (
    <main className="flex flex-wrap lg:flex-nowrap flex-row h-screen lg:gap-0 gap-4">
      <RightSectionForms text="ورود به حساب کاربری" />
      <LoginForm />
    </main>
  );
});

export default Login;
