import UserDashboardOptionBox from "@/components/atoms/UserDashboardOptionBox";
import LogoutIcon from "@mui/icons-material/Logout";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ListIcon from "@mui/icons-material/List";
import { memo } from "react";

// ! the main section of user dashboard page
const UserDashboardMain = memo(() => {
  return (
    <main className="max-w-screen-2xl m-auto my-6 border border-zinc-100 rounded-t-xl">
      <h3 className="bg-[#7db9e8] p-3 text-white font-bold text-base rounded-t-xl rounded-tl-xl text-center lg:text-right">
        داشبورد (نفت آزمایان ژرف اندیش)
      </h3>
      <section className="flex gap-5 items-center mt-6 lg:justify-start justify-center mb-24 lg:mr-4 flex-wrap">
        <UserDashboardOptionBox
          icon={<LogoutIcon sx={{ fontSize: "4rem" }} className="text-orange-600" />}
          label="ثبت نام"
          href="#"
        />
        <UserDashboardOptionBox
          icon={<PriorityHighIcon sx={{ fontSize: "4rem" }} className="text-orange-600" />}
          label="موارد اصلاحی"
          href="/user-correction-items"
        />
        <UserDashboardOptionBox
          icon={<ListIcon sx={{ fontSize: "4rem" }} className="text-orange-600" />}
          label="لیست استعلام"
          href="/user-transactions"
        />
      </section>
    </main>
  );
});

export default UserDashboardMain;
