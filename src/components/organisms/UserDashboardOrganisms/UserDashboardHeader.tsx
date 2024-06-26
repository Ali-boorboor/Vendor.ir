import MainLogo from "@/components/atoms/MainLogo";
import PasswordIcon from "@mui/icons-material/Password";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { isHamburgerMenuVisible } from "@/contexts/OrganismsStates";

// ! the header section of user dashboard page
const UserDashboardHeader = memo(({ children }: any) => {
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useRecoilState(isHamburgerMenuVisible);

  const hamburgerMenuHandler = () => setHamburgerMenuVisible(!hamburgerMenuVisible);

  return (
    <header className="bg-signup-header-gradient">
      <nav className="flex lg:flex-row flex-col items-center py-2 px-4 max-w-signup-container justify-center gap-4 lg:justify-between w-full m-auto flex-wrap lg:flex-nowrap">
        <section className="flex items-center lg:gap-4 gap-2">
          <MainLogo width="w-20 lg:w-24" height="h-8" />
          <div className="flex flex-col gap-2">
            <h1 className="text-sm lg:text-2xl font-bold text-white text-nowrap">
              سامانه ارتباط با تامین کنندگان
            </h1>
            <h2 className="text-sm lg:text-lg font-bold text-white">شرکت حفاری شمال</h2>
          </div>
        </section>
        <section
          className={`${children && "justify-center"} z-30 justify-end flex gap-3 flex-col lg:flex-row items-center flex-wrap ${hamburgerMenuVisible ? "visible top-0 opacity-100" : "invisible -top-96 opacity-0"} absolute w-full bg-signup-header-gradient p-4 lg:w-full lg:static lg:bg-none lg:p-0`}
        >
          {children && children}
          <button className="flex gap-1 items-center text-sky-500 text-sm text-nowrap lg:text-base font-bold bg-white p-2 rounded-full border hover:border-white border-sky-500 hover:scale-105 hover:bg-sky-500 hover:text-white group">
            <PasswordIcon className="group-hover:translate-x-1" />
            تغییر کلمه عبور
          </button>
          <button className="flex gap-1 items-center text-red-600 text-sm text-nowrap lg:text-base font-bold bg-white p-2 rounded-full border hover:border-white border-red-600 hover:scale-105 hover:bg-red-600 hover:text-white group">
            <LogoutIcon className="group-hover:translate-x-1" />
            خروج
          </button>
          <button
            className="lg:hidden block bg-white p-2 rounded-full border border-black"
            onClick={hamburgerMenuHandler}
          >
            <CloseIcon />
          </button>
        </section>
        <button
          className="lg:hidden block bg-white p-2 rounded-full border border-black"
          onClick={hamburgerMenuHandler}
        >
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
});

export default UserDashboardHeader;
