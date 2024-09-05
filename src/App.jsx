import AppRoutes from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  const router = AppRoutes();
  return <RouterProvider router={router} />;
}

export default App;
