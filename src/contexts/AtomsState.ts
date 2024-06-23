import { atom } from "recoil";

// ! states for username & password inputs of login form (page)
const LoginUserNameInputValue = atom({
  key: "LoginUserNameInputValue",
  default: "",
});

const LoginPasswordInputValue = atom({
  key: "LoginPasswordInputValue",
  default: "",
});

export { LoginUserNameInputValue, LoginPasswordInputValue };
