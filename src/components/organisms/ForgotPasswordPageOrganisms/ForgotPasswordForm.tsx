import ForgotPasswordFormInputs from "../../molecules/ForgotPasswordFormMolecules/ForgotPasswordFormInputs";
import ForgotPasswordFormButtons from "../../molecules/ForgotPasswordFormMolecules/ForgotPasswordFormButtons";
import MainLogo from "../../atoms/MainLogo";
import { memo } from "react";

// ! left forgot password form of forgot password page that get user datas to log the user in
// ! this component uses ForgotPasswordFormInputs & ForgotPasswordFormButtons components
const ForgotPasswordForm = memo(() => {
  return (
    <form className="flex h-full justify-start flex-col gap-4 w-full lg:basis-[33%] py-6 px-4 bg-color-gray-100">
      <MainLogo width="w-full" height="" />
      <h2 className="font-normal text-base text-color-gray-200 text-center">فراموشی رمز</h2>
      <ForgotPasswordFormInputs />
      <ForgotPasswordFormButtons />
    </form>
  );
});

export default ForgotPasswordForm;
