import { memo } from "react";
import { SignupFormRowWrapperType } from "@/types/MoleculesType";

// ! a row of signup forms (label + input) that will get children to render and a label to show
const SignupFormRowWrapper = memo(({ label, children }: SignupFormRowWrapperType) => {
  return (
    <section className="flex items-center justify-between border-b border-zinc-300 px-2 gap-2 pb-4 lg:flex-nowrap flex-wrap">
      <label
        htmlFor="nationalCodeInput"
        className="text-[#333] text-sm basis-3/4 relative lg:after:absolute lg:after:left-1 lg:after:h-16 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:border lg:after:border-zinc-300"
      >
        {label}
      </label>
      <div className="lg:basis-1/4 w-full">{children}</div>
    </section>
  );
});

export default SignupFormRowWrapper;
