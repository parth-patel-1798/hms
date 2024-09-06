import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export default function AppRoutes() {
  return createBrowserRouter([PrivateRoutes], { basename: "/" });
}
