import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { memo } from "react";

// ! form with one input that will get the national code for shop sign up form
const SignupShopNationalCode = memo(() => {
  return (
    <NationalCodeSignupForm
      title="فروشگاه"
      inputLabel="کد ملی"
      href="/shop-signup-form"
      className="shop-code-submit-btn"
    />
  );
});

export default SignupShopNationalCode;
