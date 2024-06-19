import Routes from "./routes/Routes";
import { memo } from "react";
import { useRoutes } from "react-router";

// ! this component will render routes
const App = memo(() => {
  const routes = useRoutes(Routes);
  return <>{routes}</>;
});

export default App;
