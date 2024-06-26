import TransactionRegistrationSystem from "@/components/templates/TransactionRegistrationSystem";
import { memo } from "react";

// ! Transaction registration system page (table that shows transaction details of user)
const TransactionRegistrationSystemPage = memo(() => {
  document.title = "سیستم ثبت معاملات";

  return <TransactionRegistrationSystem />;
});

export default TransactionRegistrationSystemPage;
