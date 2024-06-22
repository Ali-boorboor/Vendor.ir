import SignupCompany from "../components/templates/SignupCompany";
import SignupPerson from "../components/templates/SignupPerson";
import SignupShop from "../components/templates/SignupShop";
import SignupWorkshop from "../components/templates/SignupWorkshop";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LoginPage from "../pages/LoginPage";
import PersonSignupFormPage from "../pages/PersonSignupFormPage";
import SignupPage from "../pages/SignupPage";

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
];

export default Routes;
