import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Index, {
  action as indexAction,
  loader as indexLoader,
} from "./routes/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    loader: indexLoader,
    action: indexAction,
    // action: async ({ request }) => {
    //   console.log("request", request.formData());
    //   return null;
    // },
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
