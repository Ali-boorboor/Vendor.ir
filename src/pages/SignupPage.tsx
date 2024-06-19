import Signup from "../components/templates/Signup";
import { memo } from "react";

// ! signup page that uses signup template
const SignupPage = memo(() => {
  document.title = "سیستم ثبت نام الکترونیکی پیمانکاران و تامین کنندگان";

  return <Signup />;
});

export default SignupPage;
