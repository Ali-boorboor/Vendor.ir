import UserDashboard from "@/components/templates/UserDashboard";
import { memo } from "react";

// ! main user dashboard page (/user-dashboard) that uses user dashboard template
const UserDashboardPage = memo(() => {
  document.title = "سیستم مرکز داده";

  return <UserDashboard />;
});

export default UserDashboardPage;
