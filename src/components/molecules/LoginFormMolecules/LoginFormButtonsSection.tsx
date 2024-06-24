import AxiosInstance from "@/services/AxiosInstance";
import CustomButton from "@c/atoms/CustomButton";
import LoginIcon from "@mui/icons-material/Login";
import { Lock } from "@mui/icons-material";
import { Link } from "@mui/icons-material";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { LoginPasswordInputValue, LoginUserNameInputValue } from "@/contexts/AtomsState";
import { useNavigate } from "react-router";

// ! buttons of login form section
const LoginFormButtonsSection = memo(() => {
  const navigate = useNavigate();
  const LoginUserNameInput = useRecoilValue(LoginUserNameInputValue);
  const LoginPasswordInput = useRecoilValue(LoginPasswordInputValue);

  // ! login request handler
  const loginHandler = () => {
    AxiosInstance.post("/login", {
      UserName: LoginUserNameInput,
      Password: LoginPasswordInput,
    }).then((res) => res.data.success && navigate("/forgot-password"));
  };

  return (
    <div className="w-full flex flex-col gap-6 mt-6">
      <CustomButton
        AtomClass="login-button"
        size="100%"
        text="ورود"
        color="#fff"
        bgColor="#e80566"
        href="/user-dashboard"
        icon={<LoginIcon />}
        onClickHandler={loginHandler}
      />
      <CustomButton
        AtomClass="login-page-forgot-password-button"
        size="100%"
        text="فراموشی رمز عبور"
        color="#fff"
        bgColor="#f5b759"
        icon={<Lock />}
        href="/forgot-password"
        onClickHandler={() => {}}
      />
      <CustomButton
        AtomClass="login-page-signup-button"
        size="100%"
        text="ثبت نام جدید"
        color="#000"
        bgColor="#D1D3E0"
        icon={<Link />}
        href="/signup"
        onClickHandler={() => {}}
      />
    </div>
  );
});

export default LoginFormButtonsSection;
