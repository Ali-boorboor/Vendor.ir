import MainLogo from "@/components/atoms/MainLogo";
import PasswordIcon from "@mui/icons-material/Password";
import LogoutIcon from "@mui/icons-material/Logout";
import { memo } from "react";

// ! the header section of user dashboard page
const UserDashboardHeader = memo(() => {
  return (
    <header className="bg-signup-header-gradient">
      <nav className="flex items-center py-2 px-4 max-w-signup-container justify-center gap-4 lg:justify-between w-full m-auto flex-wrap lg:flex-nowrap">
        <section className="flex items-center lg:gap-4 gap-2">
          <MainLogo width="w-20 lg:w-24" height="h-8" />
          <div className="flex flex-col gap-2">
            <h1 className="text-sm lg:text-2xl font-bold text-white text-nowrap">
              سامانه ارتباط با تامین کنندگان
            </h1>
            <h2 className="text-sm lg:text-lg font-bold text-white">شرکت حفاری شمال</h2>
          </div>
        </section>
        <section className="flex gap-10 items-center">
          <button className="flex gap-1 items-center text-sky-500 text-sm text-nowrap lg:text-base font-bold bg-white p-2 rounded-full border hover:border-white border-sky-500 hover:scale-105 hover:bg-sky-500 hover:text-white group">
            <PasswordIcon className="group-hover:translate-x-1" />
            تغییر کلمه عبور
          </button>
          <button className="flex gap-1 items-center text-red-600 text-sm text-nowrap lg:text-base font-bold bg-white p-2 rounded-full border hover:border-white border-red-600 hover:scale-105 hover:bg-red-600 hover:text-white group">
            <LogoutIcon className="group-hover:translate-x-1" />
            خروج
          </button>
        </section>
      </nav>
    </header>
  );
});

export default UserDashboardHeader;
