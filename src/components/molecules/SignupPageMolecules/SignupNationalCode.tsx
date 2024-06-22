import CustomButton from "../../atoms/CustomButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { memo } from "react";
import { SignupNationalCodeType } from "../../../types/MoleculesType";
import { FormControl, OutlinedInput } from "@mui/material";

// ! the component form that will get national code & move user to signup forms
// ! the signup form that has only one input (natinal-code)
const SignupNationalCode = memo(
  ({ title, inputLabel, href, className }: SignupNationalCodeType) => {
    return (
      <form className="max-w-signup-container mx-auto my-8 flex flex-col gap-4 shadow-md p-2 mb-36">
        <h3 className="text-black text-base font-bold py-4 px-2 bg-[#7db9e8] rounded-t-xl">
          {title}
        </h3>
        <p className="text-[#333] text-sm">
          جهت هرگونه سوال و ابهام با اداره بررسي منابع شرکت حفاري شمال تماس حاصل نماييد درج گردد.
          شماره تماس:9 - 48613201
        </p>
        <div className="flex items-center justify-between border border-zinc-300 p-2 gap-2">
          <label
            htmlFor="nationalCodeInput"
            className="text-[#333] text-sm basis-1/4 relative after:absolute after:left-1 after:h-16 after:top-1/2 after:-translate-y-1/2 after:border after:border-zinc-300"
          >
            {inputLabel}
          </label>
          <FormControl id="nationalCodeInput" sx={{ flexBasis: "75%" }}>
            <OutlinedInput />
          </FormControl>
        </div>
        <CustomButton
          AtomClass={className}
          onClickHandler={() => {}}
          size="8rem"
          text="تایید"
          bgColor="#337ab7"
          color="#fff"
          href={href}
          icon={<CheckCircleIcon />}
        />
      </form>
    );
  }
);

export default SignupNationalCode;
