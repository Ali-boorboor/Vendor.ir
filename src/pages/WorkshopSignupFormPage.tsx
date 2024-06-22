import WorkshopSignupMainSection from "@c/organisms/SignupPageOrganisms/WorkshopSignupMainSection";
import SignupFormsTemplate from "@c/templates/SignupFormsTemplate";
import { memo } from "react";

const WorkshopSignupFormPage = memo(() => {
  return (
    <SignupFormsTemplate>
      <WorkshopSignupMainSection />
    </SignupFormsTemplate>
  );
});

export default WorkshopSignupFormPage;
