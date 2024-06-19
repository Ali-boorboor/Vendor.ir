import AxiosInstance from "./AxiosInstance";
import { LoginRequestHandlerPropsType } from "../types/FetchRequestsType";

// ! login request fetch
function LoginRequestHandler(
  UserName: LoginRequestHandlerPropsType,
  Password: LoginRequestHandlerPropsType
) {
  AxiosInstance.post("/login", {
    UserName,
    Password,
  }).then((res) => console.log(res.data));
}

export { LoginRequestHandler };
