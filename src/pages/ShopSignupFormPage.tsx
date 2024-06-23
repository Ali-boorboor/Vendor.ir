import ShopSignupMainSection from "@c/organisms/SignupPageOrganisms/ShopSignupMainSection";
import SignupFormWrappersTemplate from "@c/templates/SignupFormWrappersTemplate";
import { memo } from "react";

// ! signup form 4 shop
const ShopSignupFormPage = memo(() => {
  return (
    <SignupFormWrappersTemplate>
      <ShopSignupMainSection />
    </SignupFormWrappersTemplate>
  );
});

export default ShopSignupFormPage;
