import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./components/HomePage";
import AdminPanel from "./components/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
