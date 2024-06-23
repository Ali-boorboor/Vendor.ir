import NationalCodeSignupForm from "@c/molecules/SignupPageMolecules/NationalCodeSignupForm";
import { memo } from "react";

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
