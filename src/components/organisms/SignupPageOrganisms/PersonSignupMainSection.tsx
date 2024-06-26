import GenuineUserSignUpForm from "@c/organisms/SignupPageOrganisms/GenuineUserSignUpForm";
import { useRecoilState } from "recoil";
import { typeOfApplicantPerson, typeOfPersonPerson } from "@/contexts/OrganismsStates";
import { memo } from "react";

// ! main section of person signup form that will use GenuineUserSignUpForm component
const PersonSignupMainSection = memo(() => {
  const [TypeOfApplicant, setTypeOfApplicant] = useRecoilState(typeOfApplicantPerson);
  const [TypeOfPerson, setTypeOfPerson] = useRecoilState(typeOfPersonPerson);

  return (
    <GenuineUserSignUpForm
      TypeOfApplicantSelectBoxLabel="شخص"
      TypeOfApplicantSelectBoxDefaultValue="person"
      TypeOfApplicantState={TypeOfApplicant}
      setTypeOfApplicantState={setTypeOfApplicant}
      TypeOfPersonState={TypeOfPerson}
      setTypeOfPersonState={setTypeOfPerson}
    />
  );
});

export default PersonSignupMainSection;
