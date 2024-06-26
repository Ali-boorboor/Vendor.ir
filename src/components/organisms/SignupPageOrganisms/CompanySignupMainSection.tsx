import CustomButton from "@c/atoms/CustomButton";
import SignupFormWrapper from "@c/molecules/SignupPageMolecules/SignupFormWrapper";
import SignupFormRowWrapper from "@c/molecules/SignupPageMolecules/SignupFormRowWrapper";
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
import { typeOfApplicantCompany, typeOfPersonCompany } from "@/contexts/OrganismsStates";
import { useRecoilState } from "recoil";

// ! main section of company signup form that will use GenuineUserSignUpForm component
const CompanySignupMainSection = memo(() => {
  const [TypeOfApplicant, setTypeOfApplicant] = useRecoilState(typeOfApplicantCompany);
  const [TypeOfPerson, setTypeOfPerson] = useRecoilState(typeOfPersonCompany);

  const handleTypeOfApplicant = (e: SelectChangeEvent<string>) =>
    setTypeOfApplicant(e.target.value);
  const handleTypeOfPerson = (e: SelectChangeEvent<string>) => setTypeOfPerson(e.target.value);

  return (
    <SignupFormWrapper title="فرم ورود اطلاعات اولیه">
      <>
        <SignupFormRowWrapper label="نوع متقاضی">
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="demo-select-small-label">شرکت</InputLabel>
            <Select
              sx={{ width: "100%" }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="شرکت"
              defaultValue="company"
              value={TypeOfApplicant}
              onChange={(e) => handleTypeOfApplicant(e)}
            >
              <MenuItem value="company">
                <em>شرکت</em>
              </MenuItem>
            </Select>
          </FormControl>
        </SignupFormRowWrapper>
        <SignupFormRowWrapper label="نوع شخص">
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="demo-select-small-label">حقوقی</InputLabel>
            <Select
              sx={{ width: "100%" }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="حقوقی"
              defaultValue="legal"
              value={TypeOfPerson}
              onChange={(e) => handleTypeOfPerson(e)}
            >
              <MenuItem value="legal">
                <em>حقوقی</em>
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
              <p className="">شناسه ملی اشخاص حقوقی</p>
              <p className="">
                برای ورودهای بعدی به سامانه از شناسه فوق به عنوان نام کاربری استفاده نمایید.
              </p>
            </div>
          }
        >
          <TextField disabled id="outlined-disabled" value="0938712097" sx={{ width: "100%" }} />
        </SignupFormRowWrapper>
        <SignupFormRowWrapper label="شماره ثبت">
          <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
            <OutlinedInput />
          </FormControl>
        </SignupFormRowWrapper>
        <SignupFormRowWrapper label="تاریخ ثبت">
          <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
            <OutlinedInput />
          </FormControl>
        </SignupFormRowWrapper>
        <SignupFormRowWrapper label="محل ثبت">
          <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
            <OutlinedInput />
          </FormControl>
        </SignupFormRowWrapper>
        <SignupFormRowWrapper label="کد اقتصادی">
          <FormControl id="nationalCodeInput" sx={{ width: "100%" }}>
            <OutlinedInput />
          </FormControl>
        </SignupFormRowWrapper>
        <SignupFormRowWrapper
          label={
            <div className="flex flex-col gap-1 items-start">
              <p className="">شماره تلفن همراه</p>
              <p className="">
                (موبايل براي تغيير رمز عبور و مکاتبات اجباري مي باشد. لطفا شماره مورد نظر را به خاطر
                بسپاريد.)
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
});

export default CompanySignupMainSection;
