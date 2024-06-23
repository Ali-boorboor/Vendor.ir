import WorkshopSignupMainSection from "@c/organisms/SignupPageOrganisms/WorkshopSignupMainSection";
import SignupFormWrappersTemplate from "@c/templates/SignupFormWrappersTemplate";
import { memo } from "react";

// ! signup form 4 workshop
const WorkshopSignupFormPage = memo(() => {
  return (
    <SignupFormWrappersTemplate>
      <WorkshopSignupMainSection />
    </SignupFormWrappersTemplate>
  );
});

export default WorkshopSignupFormPage;
