import CustomButton from "@/components/atoms/CustomButton";
import SignupFormRowWrapper from "@/components/molecules/SignupPageMolecules/SignupFormRowWrapper";
import SignupFormWrapper from "@/components/molecules/SignupPageMolecules/SignupFormWrapper";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { memo } from "react";

// ! a component that handle all genuine forms (person & workshop & shop signup forms)
const GenuineUserSignUpForm = memo(
  ({
    TypeOfApplicantState,
    setTypeOfApplicantState,
    TypeOfPersonState,
    setTypeOfPersonState,
    TypeOfApplicantSelectBoxLabel,
    TypeOfApplicantSelectBoxDefaultValue,
  }: any) => {
    const handleTypeOfApplicant = (e: SelectChangeEvent<string>) =>
      setTypeOfApplicantState(e.target.value);
    const handleTypeOfPerson = (e: SelectChangeEvent<string>) =>
      setTypeOfPersonState(e.target.value);

    return (
      <SignupFormWrapper title="فرم ورود اطلاعات اولیه">
        <>
          <SignupFormRowWrapper label="نوع متقاضی">
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-select-small-label">{TypeOfApplicantSelectBoxLabel}</InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                defaultValue={TypeOfApplicantSelectBoxDefaultValue}
                label={TypeOfApplicantSelectBoxLabel}
                value={TypeOfApplicantState}
                onChange={(e) => handleTypeOfApplicant(e)}
              >
                <MenuItem value={TypeOfApplicantSelectBoxDefaultValue}>
                  <em>{TypeOfApplicantSelectBoxLabel}</em>
                </MenuItem>
              </Select>
            </FormControl>
          </SignupFormRowWrapper>
          <SignupFormRowWrapper label="نوع شخص">
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-select-small-label">حقیقی</InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="حقیقی"
                defaultValue="genuine"
                value={TypeOfPersonState}
                onChange={(e) => handleTypeOfPerson(e)}
              >
                <MenuItem value="genuine">
                  <em>حقیقی</em>
                </MenuItem>
              </Select>
            </FormControl>
          </SignupFormRowWrapper>
          <SignupFormRowWrapper label="نام شرکت">
            <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
              <OutlinedInput />
            </FormControl>
          </SignupFormRowWrapper>
          <SignupFormRowWrapper
            label={
              <div className="flex flex-col gap-1 items-start">
                <p className="">کد ملی</p>
                <p className="">
                  برای ورودهای بعدی به سامانه ازکد ملی به عنوان نام کاربری استفاده نمایید.
                </p>
              </div>
            }
          >
            <TextField disabled id="outlined-disabled" value="0938712097" sx={{ width: "100%" }} />
          </SignupFormRowWrapper>
          <SignupFormRowWrapper
            label={
              <div className="flex flex-col gap-1 items-start">
                <p className="">شماره تلفن همراه</p>
                <p className="">
                  (موبايل براي تغيير رمز عبور و مکاتبات اجباري مي باشد. لطفا شماره مورد نظر را به
                  خاطر بسپاريد.)
                </p>
              </div>
            }
          >
            <TextField
              helperText="نمونه شماره:  09128889999"
              id="demo-helper-text-misaligned"
              sx={{ width: "100%" }}
            />
          </SignupFormRowWrapper>
          <SignupFormRowWrapper label="پست الکترونیکی">
            <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
              <OutlinedInput />
            </FormControl>
          </SignupFormRowWrapper>
          <SignupFormRowWrapper label="وبسایت شرکت">
            <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
              <OutlinedInput />
            </FormControl>
          </SignupFormRowWrapper>
          <SignupFormRowWrapper label="رمز عبور">
            <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
              <OutlinedInput />
            </FormControl>
          </SignupFormRowWrapper>
          <SignupFormRowWrapper label="تکرار رمز عبور">
            <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
              <OutlinedInput />
            </FormControl>
          </SignupFormRowWrapper>
          <section className="flex items-center gap-4 px-4 lg:justify-start justify-center">
            <CustomButton
              text="ذخیره"
              bgColor="#337ab7"
              color="#fff"
              icon={<BeenhereIcon />}
              AtomClass=""
              size="8rem"
              onClickHandler={() => {}}
              href="#"
            />
            <CustomButton
              text="انصراف"
              bgColor="#d9534f"
              color="#fff"
              icon={<CancelIcon />}
              AtomClass=""
              size="8rem"
              onClickHandler={() => {}}
              href="#"
            />
          </section>
        </>
      </SignupFormWrapper>
    );
  }
);

export default GenuineUserSignUpForm;
