import GenuineUserSignUpForm from "./GenuineUserSignUpForm";
import { useRecoilState } from "recoil";
import { typeOfApplicantWorkshop, typeOfPersonWorkshop } from "@/contexts/OrganismsStates";
import { memo } from "react";

// ! main section of workshop signup form that will use GenuineUserSignUpForm component
const WorkshopSignupMainSection = memo(() => {
  const [TypeOfApplicant, setTypeOfApplicant] = useRecoilState(typeOfApplicantWorkshop);
  const [TypeOfPerson, setTypeOfPerson] = useRecoilState(typeOfPersonWorkshop);

  return (
    <GenuineUserSignUpForm
      TypeOfApplicantSelectBoxLabel="کارگاه"
      TypeOfApplicantSelectBoxDefaultValue="workshop"
      TypeOfApplicantState={TypeOfApplicant}
      setTypeOfApplicantState={setTypeOfApplicant}
      TypeOfPersonState={TypeOfPerson}
      setTypeOfPersonState={setTypeOfPerson}
    />
  );
});

export default WorkshopSignupMainSection;
