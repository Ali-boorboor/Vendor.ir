import { atom } from "recoil";

const LoginUserNameInputValue = atom({
  key: "LoginUserNameInputValue",
  default: "",
});

const LoginPasswordInputValue = atom({
  key: "LoginPasswordInputValue",
  default: "",
});

export { LoginUserNameInputValue, LoginPasswordInputValue };
