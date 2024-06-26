import CorrectionItems from "@/components/templates/CorrectionItems";
import { memo } from "react";

// ! Correction Items Page (table that shows Correction Items of user)
const CorrectionItemsPage = memo(() => {
  document.title = "سیستم ثبت نام الکترونیکی پیمانکاران و تامین کنندگان";

  return <CorrectionItems />;
});

export default CorrectionItemsPage;
