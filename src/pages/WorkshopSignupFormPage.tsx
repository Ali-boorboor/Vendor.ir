import WorkshopSignupMainSection from "../components/organisms/SignupPageOrganisms/WorkshopSignupMainSection";
import SignupFormsTemplate from "../components/templates/SignupFormsTemplate";
import { memo } from "react";

const WorkshopSignupFormPage = memo(() => {
  return (
    <SignupFormsTemplate>
      <WorkshopSignupMainSection />
    </SignupFormsTemplate>
  );
});

export default WorkshopSignupFormPage;
