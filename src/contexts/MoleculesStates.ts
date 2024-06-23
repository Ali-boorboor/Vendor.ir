import { atom } from "recoil";

// ! states 4 radio inputs of forgot-password (form) page
// ! legal ==> حقوقی |||| genuine ==> حقیقی
const IsRadioInputLegalChecked = atom({
  key: "IsRadioInputLegalChecked",
  default: false,
});

const IsRadioInputGenuineChecked = atom({
  key: "IsRadioInputGenuineChecked",
  default: false,
});

export { IsRadioInputLegalChecked, IsRadioInputGenuineChecked };
