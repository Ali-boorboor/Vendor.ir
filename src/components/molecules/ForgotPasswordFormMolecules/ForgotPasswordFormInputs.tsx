import CustomInput from "@c/atoms/CustomInput";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ImageIcon from "@mui/icons-material/Image";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { IsRadioInputGenuineChecked, IsRadioInputLegalChecked } from "@/contexts/MoleculesStates";

// ! inputs of forgot password form (page)
// ! this component has some logics for checking the radio inputs
// ! legal ==> حقوقی ||||| genuine ==> حقیقی
const ForgotPasswordFormInputs = memo(() => {
  const [legalRadioChecked, setLegalRadioChecked] = useRecoilState(IsRadioInputLegalChecked);
  const [genuineRadioChecked, setGenuineRadioChecked] = useRecoilState(IsRadioInputGenuineChecked);

  const RadioBoxCheckedStyle =
    "shadow-Radio-input-box-shadow bg-gradient-to-r from-color-pink-600 to-color-orange-400 text-white border-color-pink-700";

  const legalRadioCheckedHandler = () => {
    setLegalRadioChecked(!legalRadioChecked);
    setGenuineRadioChecked(false);
  };

  const genuineRadioCheckedHandler = () => {
    setGenuineRadioChecked(!genuineRadioChecked);
    setLegalRadioChecked(false);
  };

  return (
    <>
      <p className="font-semibold text-sm text-color-gray-400">نوع شخص</p>
      <div className="flex justify-between gap-8 items-center">
        <label
          htmlFor="legal"
          className={`cursor-pointer basis-1/2 p-2 rounded-md flex items-center gap-2 border-2 ${!legalRadioChecked ? "bg-white border-gray-300 text-black" : RadioBoxCheckedStyle}`}
        >
          <input
            id="legal"
            type="radio"
            name="person-type"
            value="legal"
            onChange={legalRadioCheckedHandler}
          />
          حقوقی
        </label>
        <label
          htmlFor="genuine"
          className={`cursor-pointer basis-1/2 p-2 rounded-md flex items-center gap-2 border-2 ${!genuineRadioChecked ? "bg-white border-gray-300 text-black" : RadioBoxCheckedStyle}`}
        >
          <input
            id="genuine"
            type="radio"
            name="person-type"
            value="genuine"
            onChange={genuineRadioCheckedHandler}
          />
          حقیقی
        </label>
      </div>
      <label htmlFor="" className="font-semibold text-sm text-color-gray-400">
        {legalRadioChecked ? "شناسه ملی (نام کاربری)" : "کد ملی (نام کاربری)"}
      </label>
      <CustomInput
        AtomClass=""
        setState=""
        state=""
        type="text"
        placeholder={legalRadioChecked ? "شناسه ملی" : "کد ملی"}
        size="100%"
        icon={<HowToRegIcon />}
      />
      <label htmlFor="" className="font-semibold text-sm text-color-gray-400">
        تصویر امنیتی
      </label>
      <CustomInput
        AtomClass=""
        size="100%"
        icon={<ImageIcon />}
        placeholder="تصویر امنیتی"
        type="text"
        setState=""
        state=""
      />
    </>
  );
});

export default ForgotPasswordFormInputs;
