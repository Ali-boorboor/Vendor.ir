import TransactionRegistrationSystemMain from "@/components/organisms/UserDashboardOrganisms/TransactionRegistrationSystemMain";
import UserDashboardHeader from "@/components/organisms/UserDashboardOrganisms/UserDashboardHeader";
import CottageIcon from "@mui/icons-material/Cottage";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { memo } from "react";
import { Link } from "react-router-dom";

// ! Transaction Registration System template witch will render in Transaction Registration System page component
const TransactionRegistrationSystem = memo(() => {
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
        <Link
          to="#"
          className="flex gap-1 items-center text-sky-500 text-sm text-nowrap lg:text-base font-bold bg-white p-2 rounded-full border hover:border-white border-sky-500 hover:scale-105 hover:bg-sky-500 hover:text-white group"
        >
          <ReceiptIcon className="group-hover:translate-x-1" />
          استعلام های پیشین
        </Link>
      </UserDashboardHeader>
      <TransactionRegistrationSystemMain />
    </>
  );
});

export default TransactionRegistrationSystem;
