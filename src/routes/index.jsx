import { createBrowserRouter, createHashRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export default function AppRoutes() {
  // return createHashRouter([PrivateRoutes]);
  return createBrowserRouter([PrivateRoutes]);
}
