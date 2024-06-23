import CustomButton from "@c/atoms/CustomButton";
import SignupFormWrapper from "@c/molecules/SignupPageMolecules/SignupFormWrapper";
import SignupFormRowWrapper from "@c/molecules/SignupPageMolecules/SignupFormRowWrapper";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import CancelIcon from "@mui/icons-material/Cancel";
import { memo } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { typeOfApplicantWorkshop, typeOfPersonWorkshop } from "@/contexts/OrganismsStates";

const WorkshopSignupMainSection = memo(() => {
  const [TypeOfApplicant, setTypeOfApplicant] = useRecoilState(typeOfApplicantWorkshop);
  const [TypeOfPerson, setTypeOfPerson] = useRecoilState(typeOfPersonWorkshop);

  const handleTypeOfApplicant = (e: SelectChangeEvent<string>) =>
    setTypeOfApplicant(e.target.value);
  const handleTypeOfPerson = (e: SelectChangeEvent<string>) => setTypeOfPerson(e.target.value);

  return (
    <SignupFormWrapper title="فرم ورود اطلاعات اولیه">
      <>
        <SignupFormRowWrapper label="نوع متقاضی">
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="demo-select-small-label">کارگاه</InputLabel>
            <Select
              sx={{ width: "100%" }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="کارگاه"
              defaultValue="workshop"
              value={TypeOfApplicant}
              onChange={(e) => handleTypeOfApplicant(e)}
            >
              <MenuItem value="workshop">
                <em>کارگاه</em>
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
              value={TypeOfPerson}
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

export default WorkshopSignupMainSection;
