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

const typeOfApplicantCompany = atom({
  key: "typeOfApplicantCompany",
  default: "company",
});

const typeOfPersonCompany = atom({
  key: "typeOfPersonCompany",
  default: "legal",
});

const typeOfApplicantWorkshop = atom({
  key: "typeOfApplicantWorkshop",
  default: "workshop",
});

const typeOfPersonWorkshop = atom({
  key: "typeOfPersonWorkshop",
  default: "genuine",
});

const typeOfApplicantShop = atom({
  key: "typeOfApplicantShop",
  default: "shop",
});

const typeOfPersonShop = atom({
  key: "typeOfPersonShop",
  default: "genuine",
});

export {
  IsSignupCompanyDropDown,
  IsSignupRealPersonDropDown,
  typeOfApplicant,
  typeOfPerson,
  typeOfApplicantCompany,
  typeOfPersonCompany,
  typeOfApplicantWorkshop,
  typeOfPersonWorkshop,
  typeOfApplicantShop,
  typeOfPersonShop,
};
