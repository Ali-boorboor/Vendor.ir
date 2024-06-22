import ShopSignupMainSection from "@c/organisms/SignupPageOrganisms/ShopSignupMainSection";
import SignupFormsTemplate from "@c/templates/SignupFormsTemplate";
import { memo } from "react";

const ShopSignupFormPage = memo(() => {
  return (
    <SignupFormsTemplate>
      <ShopSignupMainSection />
    </SignupFormsTemplate>
  );
});

export default ShopSignupFormPage;
