import SignupFooter from "@/components/organisms/SignupPageOrganisms/SignupFooter";
import UserDashboardHeader from "@/components/organisms/UserDashboardOrganisms/UserDashboardHeader";
import UserDashboardMain from "@/components/organisms/UserDashboardOrganisms/UserDashboardMain";
import { memo } from "react";

// ! User Dashboard template witch will render in User Dashboard page component
const UserDashboard = memo(() => {
  return (
    <>
      <UserDashboardHeader />
      <UserDashboardMain />
      <SignupFooter />
    </>
  );
});

export default UserDashboard;
