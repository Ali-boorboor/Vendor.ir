import { atom } from "recoil";

const IsSignupCompanyDropDown = atom({
  key: "IsSignupCompanyDropDown",
  default: false,
});

const IsSignupRealPersonDropDown = atom({
  key: "IsSignupRealPersonDropDown",
  default: false,
});

export { IsSignupCompanyDropDown, IsSignupRealPersonDropDown };
