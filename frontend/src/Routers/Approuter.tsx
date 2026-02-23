import Forgetpassword from "@/UIcomponent/Authentication/Forgetpassword";
import Login from "@/UIcomponent/Authentication/Login";
import ResetPassword from "@/UIcomponent/Authentication/Resetpassword";
import SignUp from "@/UIcomponent/Authentication/SignUp";
import { Routes, Route } from "react-router-dom";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<Forgetpassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
}
