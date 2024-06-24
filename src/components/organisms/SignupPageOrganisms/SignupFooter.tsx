import { memo } from "react";
import { Link } from "react-router-dom";

// ! footer of signup pages that uses MainLogo Atom to show logo
const SignupFooter = memo(() => {
  return (
    <footer className="bg-signup-header-gradient p-6 fixed bottom-0 left-0 right-0">
      <p className="text-white font-medium text-base text-center">
        طراحی و استقرار سامانه توسط{" "}
        <strong>
          <Link to="http://naftazco.ir/" className="underline">
            نفت آزمایان ژرف اندیش
          </Link>
        </strong>
      </p>
    </footer>
  );
});

export default SignupFooter;
