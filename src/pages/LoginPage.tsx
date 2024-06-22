import Login from "@c/templates/Login";
import { memo } from "react";

// ! login page that uses login template
const LoginPage = memo(() => {
  document.title = "ورود به حساب کاربری";

  return <Login />;
});

export default LoginPage;
