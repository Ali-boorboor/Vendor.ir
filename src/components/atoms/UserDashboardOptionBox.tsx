import { UserDashboardOptionBoxType } from "@/types/MoleculesType";
import { memo } from "react";
import { Link } from "react-router-dom";

// ! white boxes in user dashboard page that will let u Choose what action you want to perform & it will get the following props
const UserDashboardOptionBox = memo(({ icon, label, href }: UserDashboardOptionBoxType) => {
  return (
    <Link
      to={href}
      className="p-8 flex flex-col gap-2 lg:gap-6 justify-center items-center border-2 border-zinc-300 rounded-3xl h-40 w-48 lg:h-48 lg:w-64 shadow-xl hover:scale-105 hover:border-orange-600"
    >
      {icon}
      <span className="text-base text-black font-bold text-center text-nowrap">{label}</span>
    </Link>
  );
});

export default UserDashboardOptionBox;
