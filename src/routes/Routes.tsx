import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

// ! List of all routes
let Routes = [
  { path: "/", element: <LoginPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/signup", element: <SignupPage /> },
];

export default Routes;
