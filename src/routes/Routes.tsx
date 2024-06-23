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

// ! List of all routes
let Routes = [
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
];

export default Routes;
