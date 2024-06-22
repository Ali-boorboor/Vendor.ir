import ForgotPassword from "@c/templates/ForgotPassword";
import { memo } from "react";

// ! forgot password page that uses ForgotPassword template
const ForgotPasswordPage = memo(() => {
  document.title = "فراموشی رمز";

  return <ForgotPassword />;
});

export default ForgotPasswordPage;
