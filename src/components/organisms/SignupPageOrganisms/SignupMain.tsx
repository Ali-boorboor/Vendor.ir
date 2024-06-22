import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SignupDropDownBox from "../../atoms/SignupDropDownBox";
import { memo } from "react";
import { useRecoilState } from "recoil";
import {
  IsSignupCompanyDropDown,
  IsSignupRealPersonDropDown,
} from "../../../contexts/OrganismsStates";
import { Link } from "react-router-dom";

// ! main section of signup page
const SignupMain = memo(() => {
  const [signupCompanyDropDown, setSignupCompanyDropDown] = useRecoilState(IsSignupCompanyDropDown);
  const [signupRealPersonDropDown, setSignupRealPersonDropDown] = useRecoilState(
    IsSignupRealPersonDropDown
  );

  const setCompanyDropDownHandler = () => {
    setSignupCompanyDropDown(!signupCompanyDropDown);
    setSignupRealPersonDropDown(false);
  };

  const setRealPersonDropDownHandler = () => {
    setSignupRealPersonDropDown(!signupRealPersonDropDown);
    setSignupCompanyDropDown(false);
  };

  return (
    <main className="max-w-signup-container w-full m-auto">
      <h2 className="text-3xl font-bold text-color-gray-500 my-6 text-center lg:text-right">
        ثبت نام جدید
      </h2>
      <section className="flex flex-col gap-4">
        <section
          className="text-color-gray-300 text-base font-bold cursor-pointer flex flex-col gap-4 py-4 px-2 shadow-sm border-y border-gray-200"
          onClick={setCompanyDropDownHandler}
        >
          <p
            id="company-dropdown"
            className={`flex items-center gap-1 ${signupCompanyDropDown && "pb-4 border-b-2 border-color-purple-400"}`}
          >
            {signupCompanyDropDown ? (
              <ArrowCircleUpTwoToneIcon sx={{ color: "#6B02FF", width: "1.4rem" }} />
            ) : (
              <ArrowCircleDownTwoToneIcon sx={{ color: "#6B02FF", width: "1.4rem" }} />
            )}
            شرکت
          </p>
          {signupCompanyDropDown && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center px-8 py-4">
              <SignupDropDownBox id="SignupDropDownBoxCompany" text="شرکت" href="company" />
            </div>
          )}
        </section>
        <section
          className="text-color-gray-300 text-base font-bold cursor-pointer flex flex-col gap-4 border-y border-gray-200 py-4 px-2 shadow-sm"
          onClick={setRealPersonDropDownHandler}
        >
          <p
            id="person-dropdown"
            className={`flex items-center gap-1 ${signupRealPersonDropDown && "pb-4 border-b-2 border-color-purple-400"}`}
          >
            {signupRealPersonDropDown ? (
              <ArrowCircleUpTwoToneIcon sx={{ color: "#6B02FF", width: "1.4rem" }} />
            ) : (
              <ArrowCircleDownTwoToneIcon sx={{ color: "#6B02FF", width: "1.4rem" }} />
            )}
            شخص حقيقي
          </p>
          {signupRealPersonDropDown && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center px-8 py-4">
              <SignupDropDownBox id="SignupDropDownBoxShop" text="فروشگاه" href="shop" />
              <SignupDropDownBox id="SignupDropDownBoxWorkshop" text="کارگاه" href="workshop" />
              <SignupDropDownBox id="SignupDropDownBoxPerson" text="شخص" href="person" />
            </div>
          )}
        </section>
        <h3 className="font-bold text-lg text-color-gray-500 border-y border-gray-200 py-4 px-2 shadow-sm flex items-center gap-1">
          <Link to="#">
            <QuestionMarkIcon sx={{ color: "#ffa500", width: "2rem" }} />
            راهنمای سامانه
          </Link>
        </h3>
      </section>
    </main>
  );
});

export default SignupMain;
