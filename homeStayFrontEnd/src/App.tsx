import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import RoomList from "./Components/RoomList";
import AdminDash from "./Components/AdminDash";
import { Room, AddRoom } from "./Components/AddRoom";
import RoomsPage from "./Pages/RoomsPage";
import EditRoom from "./Components/EditRoom";
import { useState } from "react";

const room = useState<Room>({
  roomNo: 100,
  description: "",
  imagePath: "",
  capacity: 1,
  price: 1000,
  available: true,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/rooms",
    element: <RoomsPage />,
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
  {
    path: `/admin/edit-room/${room}`,
    element: (
      <EditRoom
        roomNo={0}
        description={""}
        imagePath={""}
        capacity={0}
        price={0}
        available={false}
      />
    ),
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
