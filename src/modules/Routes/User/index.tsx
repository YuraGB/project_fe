import ProtectedRoutes from "@/components/ProtectedRoutes";
import { type LoaderFunction, Route, Routes } from "react-router-dom";
import LayoutWithSidebar from "@/components/Layouts/LayoutWithSidebar.tsx";
import UserHome from "@/pages/UserHome";
import UserProfile from "@/pages/UserProfile";
import UserSettings from "@/pages/UserSettings";
import { useSelector } from "react-redux";
import { userSelector } from "@/modules/store/slices/auth/authSlice.ts";
import { type FC } from "react";
import CustomPage from "@/pages/CustomPage";

const UserRoutes: FC = () => {
  const user = useSelector(userSelector);
  const loaderFunc: LoaderFunction<{ title: string; content: [] }> = ({
    params,
  }) => {
    console.log(params.teamId);
    return { title: "Custom Page", content: [] };
  };

  return (
    <Routes>
      <Route element={<ProtectedRoutes user={user} />}>
        <Route path="/" element={<LayoutWithSidebar />}>
          <Route index element={<UserHome />} />
          <Route path=":pageId" element={<CustomPage />} loader={loaderFunc} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="*" element={<UserHome />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;
