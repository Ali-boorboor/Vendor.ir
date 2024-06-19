import CustomInput from "../../atoms/CustomInput";
import PersonIcon from "@mui/icons-material/Person";
import ImageIcon from "@mui/icons-material/Image";
import { Lock } from "@mui/icons-material";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { LoginPasswordInputValue, LoginUserNameInputValue } from "../../../contexts/AtomsState";

// ! inputs of login form section
const LoginFormInputsSection = memo(() => {
  const [userNameValue, setUserNameValue] = useRecoilState(LoginUserNameInputValue);
  const [passwordValue, setPasswordValue] = useRecoilState(LoginPasswordInputValue);

  return (
    <>
      <label htmlFor="" className="font-semibold text-sm text-color-gray-400">
        نام کاربری (همان شناسه ملی میباشد.)
      </label>
      <CustomInput
        AtomClass="login-user-name-input"
        setState={setUserNameValue}
        state={userNameValue}
        size="100%"
        type="text"
        placeholder="نام کاربری"
        icon={<PersonIcon />}
      />
      <label htmlFor="" className="font-semibold text-sm text-color-gray-400">
        کلمه عبور
      </label>
      <CustomInput
        AtomClass="login-password-input"
        setState={setPasswordValue}
        state={passwordValue}
        size="100%"
        type="password"
        placeholder="کلمه عبور"
        icon={<Lock />}
      />
      <label htmlFor="" className="font-semibold text-sm text-color-gray-400">
        تصویر امنیتی
      </label>
      <CustomInput
        AtomClass=""
        setState=""
        state=""
        size="100%"
        type="text"
        placeholder="تصویر امنیتی"
        icon={<ImageIcon />}
      />
    </>
  );
});

export default LoginFormInputsSection;
