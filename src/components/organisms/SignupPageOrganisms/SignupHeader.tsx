import MainLogo from "../../atoms/MainLogo";
import { memo } from "react";

// ! header of signup pages that uses MainLogo Atom to show logo
const SignupHeader = memo(() => {
  return (
    <header className="bg-signup-header-gradient">
      <nav className="flex items-center py-5 px-4 max-w-signup-container w-full m-auto">
        <section className="flex items-center lg:gap-4 gap-2">
          <MainLogo width="w-20 lg:w-24" height="h-8" />
          <h1 className="text-lg lg:text-2xl font-bold text-white">شرکت حفاری شمال</h1>
        </section>
      </nav>
    </header>
  );
});

export default SignupHeader;
