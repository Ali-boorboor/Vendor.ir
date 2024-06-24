import GenuineUserSignUpForm from "./GenuineUserSignUpForm";
import { useRecoilState } from "recoil";
import { typeOfApplicantShop, typeOfPersonShop } from "@/contexts/OrganismsStates";
import { memo } from "react";

const ShopSignupMainSection = memo(() => {
  const [TypeOfApplicant, setTypeOfApplicant] = useRecoilState(typeOfApplicantShop);
  const [TypeOfPerson, setTypeOfPerson] = useRecoilState(typeOfPersonShop);

  return (
    <GenuineUserSignUpForm
      TypeOfApplicantSelectBoxLabel="فروشگاه"
      TypeOfApplicantSelectBoxDefaultValue="shop"
      TypeOfApplicantState={TypeOfApplicant}
      setTypeOfApplicantState={setTypeOfApplicant}
      TypeOfPersonState={TypeOfPerson}
      setTypeOfPersonState={setTypeOfPerson}
    />
  );
});

export default ShopSignupMainSection;
