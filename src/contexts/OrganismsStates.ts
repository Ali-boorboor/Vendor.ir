import { atom } from "recoil";

// ! option boxs of company (/signup) state (show / hide) (for company)
const IsSignupCompanyDropDown = atom({
  key: "IsSignupCompanyDropDown",
  default: false,
});

// ! option boxs of real-person (/signup) state (show / hide) (for shop & workshop & person)
const IsSignupRealPersonDropDown = atom({
  key: "IsSignupRealPersonDropDown",
  default: false,
});

// ! states for select boxes of each form
// ! typeOfApplicant ==> نوع متقاضی + name of form (person | shop | workshop | company)
// ! typeOfPerson ==> نوع شخص + name of form (person | shop | workshop | company)
const typeOfApplicantPerson = atom({
  key: "typeOfApplicant",
  default: "person",
});

const typeOfPersonPerson = atom({
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

const isHamburgerMenuVisible = atom({
  key: "isHamburgerMenuVisible",
  default: true,
});

export {
  IsSignupCompanyDropDown,
  IsSignupRealPersonDropDown,
  typeOfApplicantPerson,
  typeOfPersonPerson,
  typeOfApplicantCompany,
  typeOfPersonCompany,
  typeOfApplicantWorkshop,
  typeOfPersonWorkshop,
  typeOfApplicantShop,
  typeOfPersonShop,
  isHamburgerMenuVisible,
};
