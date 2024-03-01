import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import RoomList from "./Components/RoomList";
import AdminDash from "./Components/AdminDash";
import AddRoom from "./Components/AddRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admin",
    element: <AdminDash />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/admin/room",
    element: <RoomList />,
  },
  {
    path: "/admin/addroom",
    element: <AddRoom />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
