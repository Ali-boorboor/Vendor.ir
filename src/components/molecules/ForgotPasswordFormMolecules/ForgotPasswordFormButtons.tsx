import CustomButton from "@c/atoms/CustomButton";
import LoginIcon from "@mui/icons-material/Login";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import { Link } from "@mui/icons-material";
import { memo } from "react";

// ! buttons of forgot password form section

const ForgotPasswordFormButtons = memo(() => {
  return (
    <div className="w-full flex flex-col gap-6 mt-6">
      <CustomButton
        onClickHandler={() => {}}
        AtomClass="forgot-password-login-button"
        size="100%"
        text="درخواست کلمه عبور"
        color="#fff"
        bgColor="#e80566"
        icon={<PhonelinkLockIcon />}
        href="#"
      />
      <CustomButton
        onClickHandler={() => {}}
        AtomClass="forgot-password-page-login-button"
        size="100%"
        text="صفحه ورود"
        color="#fff"
        bgColor="#f5b759"
        icon={<LoginIcon />}
        href="/"
      />
      <CustomButton
        onClickHandler={() => {}}
        AtomClass="forgot-password-page-signup-button"
        size="100%"
        text="ثبت نام جدید"
        color="#000"
        bgColor="#D1D3E0"
        icon={<Link />}
        href="/signup"
      />
    </div>
  );
});

export default ForgotPasswordFormButtons;
