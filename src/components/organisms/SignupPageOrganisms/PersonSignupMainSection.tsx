import GenuineUserSignUpForm from "./GenuineUserSignUpForm";
import { useRecoilState } from "recoil";
import { typeOfApplicantPerson, typeOfPersonPerson } from "@/contexts/OrganismsStates";
import { memo } from "react";

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
