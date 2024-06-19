import { atom } from "recoil";

const IsRadioInputLegalChecked = atom({
  key: "IsRadioInputLegalChecked",
  default: false,
});

const IsRadioInputGenuineChecked = atom({
  key: "IsRadioInputGenuineChecked",
  default: false,
});

export { IsRadioInputLegalChecked, IsRadioInputGenuineChecked };
