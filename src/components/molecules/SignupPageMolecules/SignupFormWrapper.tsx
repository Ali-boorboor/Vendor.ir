import { memo } from "react";
import { SignupFormWrappertype } from "@/types/MoleculesType";

// ! the form wrapper of signup forms that get childrens to render and a title to show
const SignupFormWrapper = memo(({ title, children }: SignupFormWrappertype) => {
  return (
    <form className="max-w-signup-container mx-auto my-8 flex flex-col gap-4 shadow-md mb-36 pb-4 border-l border-r border-b rounded-tr-xl rounded-tl-xl border-zinc-300">
      <h3 className="text-black text-base font-bold py-4 px-2 bg-[#7db9e8] rounded-t-xl">
        {title}
      </h3>
      {children}
    </form>
  );
});

export default SignupFormWrapper;
