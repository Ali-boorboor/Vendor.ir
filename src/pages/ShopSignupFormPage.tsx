import ShopSignupMainSection from "../components/organisms/SignupPageOrganisms/ShopSignupMainSection";
import SignupFormsTemplate from "../components/templates/SignupFormsTemplate";
import { memo } from "react";

const ShopSignupFormPage = memo(() => {
  return (
    <SignupFormsTemplate>
      <ShopSignupMainSection />
    </SignupFormsTemplate>
  );
});

export default ShopSignupFormPage;
