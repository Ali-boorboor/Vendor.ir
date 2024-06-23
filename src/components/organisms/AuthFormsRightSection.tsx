import { memo } from "react";
import { AuthFormsRightSectionType } from "@/types/OrganismsType";

// ! right section (image) of login & forgot-password forms
const AuthFormsRightSection = memo(({ text }: AuthFormsRightSectionType) => {
  return (
    <section className="w-full lg:basis-[67%] bg-login-background-img bg-center h-full bg-cover bg-no-repeat relative">
      <div className="bg-gradient-to-r from-color-pink-700 to-color-blue-600 absolute inset-0 z-10"></div>
      <div className="flex flex-col gap-4 justify-center items-center lg:items-start h-screen lg:pr-20">
        <h1 className="text-white text-3xl font-bold z-20">شرکت حفاری شمال</h1>
        <p className="text-white text-xl font-normal z-20">{text}</p>
      </div>
    </section>
  );
});

export default AuthFormsRightSection;
