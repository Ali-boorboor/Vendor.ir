import { memo } from "react";
import { MainLogoType } from "../../types/AtomsType";

const MainLogo = memo(({ width, height }: MainLogoType) => {
  return (
    <div className={`${width} ${height} max-w-96 mx-auto mb-4`}>
      <img src="/images/png/main-logo.png" alt="main-logo" className="w-full h-full object-cover" />
    </div>
  );
});

export default MainLogo;
