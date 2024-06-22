import { atom } from "recoil";

const IsSignupCompanyDropDown = atom({
  key: "IsSignupCompanyDropDown",
  default: false,
});

const IsSignupRealPersonDropDown = atom({
  key: "IsSignupRealPersonDropDown",
  default: false,
});

const typeOfApplicant = atom({
  key: "typeOfApplicant",
  default: "person",
});

const typeOfPerson = atom({
  key: "typeOfPerson",
  default: "genuine",
});

export { IsSignupCompanyDropDown, IsSignupRealPersonDropDown, typeOfApplicant, typeOfPerson };
