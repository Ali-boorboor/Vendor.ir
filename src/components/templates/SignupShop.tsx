import SignupNationalCode from "@c/molecules/SignupPageMolecules/SignupNationalCode";
import { memo } from "react";

const SignupShop = memo(() => {
  return (
    <SignupNationalCode
      title="فروشگاه"
      inputLabel="کد ملی"
      href="/shop-signup-form"
      className="shop-code-submit-btn"
    />
  );
});

export default SignupShop;
