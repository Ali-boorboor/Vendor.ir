import SignupCompany from "../components/templates/SignupCompany";
import SignupPerson from "../components/templates/SignupPerson";
import SignupShop from "../components/templates/SignupShop";
import SignupWorkshop from "../components/templates/SignupWorkshop";
import CompanySignupFormPage from "../pages/CompanySignupFormPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LoginPage from "../pages/LoginPage";
import PersonSignupFormPage from "../pages/PersonSignupFormPage";
import ShopSignupFormPage from "../pages/ShopSignupFormPage";
import SignupPage from "../pages/SignupPage";
import WorkshopSignupFormPage from "../pages/WorkshopSignupFormPage";

// ! List of all routes
let Routes = [
  { path: "/", element: <LoginPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  // ! signup page with its template children
  {
    path: "/signup",
    element: <SignupPage />,
    children: [
      { path: "company", element: <SignupCompany /> },
      { path: "workshop", element: <SignupWorkshop /> },
      { path: "shop", element: <SignupShop /> },
      { path: "person", element: <SignupPerson /> },
    ],
  },
  { path: "/person-signup-form", element: <PersonSignupFormPage /> },
  { path: "/company-signup-form", element: <CompanySignupFormPage /> },
  { path: "/workshop-signup-form", element: <WorkshopSignupFormPage /> },
  { path: "/shop-signup-form", element: <ShopSignupFormPage /> },
];

export default Routes;
