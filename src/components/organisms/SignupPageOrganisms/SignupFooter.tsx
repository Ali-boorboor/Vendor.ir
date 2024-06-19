import { memo } from "react";
import { Link } from "react-router-dom";

const SignupFooter = memo(() => {
  return (
    <footer className="bg-signup-header-gradient py-8 px-6 fixed bottom-0 left-0 right-0">
      <p className="text-white font-medium text-base text-center">
        طراحی و استقرار سامانه توسط{" "}
        <strong>
          <Link to="#" className="underline">
            دفراز
          </Link>
        </strong>
      </p>
    </footer>
  );
});

export default SignupFooter;