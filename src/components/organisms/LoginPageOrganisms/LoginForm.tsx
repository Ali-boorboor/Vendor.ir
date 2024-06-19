import MainLogo from "../../atoms/MainLogo";
import LoginFormButtonsSection from "../../molecules/LoginFormMolecules/LoginFormButtonsSection";
import LoginFormInputsSection from "../../molecules/LoginFormMolecules/LoginFormInputsSection";
import { memo } from "react";

// ! left login form of login page that get user datas to log the user in
// ! this component uses LoginFormInputsSection & LoginFormButtonsSection components
const LoginForm = memo(() => {
  return (
    <form className="flex h-full justify-start flex-col gap-4 w-full lg:basis-[33%] py-6 px-4 bg-color-gray-100">
      <MainLogo width="w-full" height="" />
      <h2 className="font-normal text-base text-color-gray-200 text-center">ورود به حساب کاربری</h2>
      <LoginFormInputsSection />
      <LoginFormButtonsSection />
      <h3 className="text-lg text-black font-semibold">
        در صورت وجود هر گونه سوال با شماره ۶-۴۸۶۱۳۲۰۱ تماس حاصل نمایید.
      </h3>
    </form>
  );
});

export default LoginForm;
