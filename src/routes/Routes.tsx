import SignupCompanyNationalCode from "@c/organisms/SignupPageOrganisms/SignupCompanyNationalCode";
import SignupPersonNationalCode from "@c/organisms/SignupPageOrganisms/SignupPersonNationalCode";
import SignupShopNationalCode from "@c/organisms/SignupPageOrganisms/SignupShopNationalCode";
import SignupWorkshopNationalCode from "@c/organisms/SignupPageOrganisms/SignupWorkshopNationalCode";
import CompanySignupFormPage from "@/pages/CompanySignupFormPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import LoginPage from "@/pages/LoginPage";
import PersonSignupFormPage from "@/pages/PersonSignupFormPage";
import ShopSignupFormPage from "@/pages/ShopSignupFormPage";
import SignupPage from "@/pages/SignupPage";
import WorkshopSignupFormPage from "@/pages/WorkshopSignupFormPage";
import Error404Page from "@/pages/Error404Page";
import UserDashboardPage from "@/pages/UserDashboardPage";
import TransactionRegistrationSystemPage from "@/pages/TransactionRegistrationSystemPage";
import CorrectionItemsPage from "@/pages/CorrectionItemsPage";

// ! List of all routes
let Routes = [
  { path: "*", element: <Error404Page /> }, // ! error 404 page (page not found)
  { path: "/", element: <LoginPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  // ! signup page with its children (national code components)
  {
    path: "/signup",
    element: <SignupPage />,
    children: [
      { path: "company", element: <SignupCompanyNationalCode /> },
      { path: "workshop", element: <SignupWorkshopNationalCode /> },
      { path: "shop", element: <SignupShopNationalCode /> },
      { path: "person", element: <SignupPersonNationalCode /> },
    ],
  },
  // ! signup forms (for person form &...)
  { path: "/person-signup-form", element: <PersonSignupFormPage /> },
  { path: "/company-signup-form", element: <CompanySignupFormPage /> },
  { path: "/workshop-signup-form", element: <WorkshopSignupFormPage /> },
  { path: "/shop-signup-form", element: <ShopSignupFormPage /> },
  // ! user dashboard routes
  { path: "/user-dashboard", element: <UserDashboardPage /> },
  { path: "/user-transactions", element: <TransactionRegistrationSystemPage /> },
  { path: "/user-correction-items", element: <CorrectionItemsPage /> },
];

export default Routes;
