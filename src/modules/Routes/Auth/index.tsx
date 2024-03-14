import { type FC } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "@/pages/Registration";
import Login from "@/pages/Login";
import Logout from "@/pages/Logout";

const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default AuthRoutes;
