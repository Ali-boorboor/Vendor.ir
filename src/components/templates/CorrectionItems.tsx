import UserDashboardHeader from "../organisms/UserDashboardOrganisms/UserDashboardHeader";
import CorrectionItemsMain from "../organisms/UserDashboardOrganisms/CorrectionItemsMain";
import SignupFooter from "../organisms/SignupPageOrganisms/SignupFooter";
import CottageIcon from "@mui/icons-material/Cottage";
import { Link } from "react-router-dom";
import { memo } from "react";

// ! Correction Items template witch will render in Correction Items page component
const CorrectionItems = memo(() => {
  return (
    <>
      <UserDashboardHeader>
        <Link
          to="/user-dashboard"
          className="flex gap-1 items-center text-sky-500 text-sm text-nowrap lg:text-base font-bold bg-white p-2 rounded-full border hover:border-white border-sky-500 hover:scale-105 hover:bg-sky-500 hover:text-white group"
        >
          <CottageIcon className="group-hover:translate-x-1" />
          صفحه نخست
        </Link>
      </UserDashboardHeader>
      <CorrectionItemsMain />
      <SignupFooter />
    </>
  );
});

export default CorrectionItems;
