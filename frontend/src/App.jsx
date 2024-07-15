import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Feeds from "./components/Feeds";
import Explore from "./components/Explore";
import Reels from "./components/Reels";
import CreatePostForm from "./components/CreatePostForm";
import Saved from "./components/Saved";
import SignUp from "./components/SignUP";
import Auth from "./pages/Auth";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import UpdatePassword from "./components/UpdatePassword";
import UpdateProfile from "./components/UpdateProfile";
import UserProfile from "./shared/UserProfile";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Feeds />} />
        <Route path="explore" element={<Explore />} />
        <Route path="reels" element={<Reels />} />
        <Route path="bookmarks" element={<Saved />} />
        <Route path="add-post" element={<CreatePostForm />} />
        <Route path="profile/:username" element={<UserProfile />} />
      </Route>
      <Route element={<Auth />}>
        <Route path="accounts/emailsignup" element={<SignUp />} />
        <Route path="accounts/login" element={<Login />} />
        <Route path="accounts/password/reset/" element={<ResetPassword />} /> //
        user well provide email, get password reset mail from server
        <Route path="accounts/update-password" element={<UpdatePassword />} />
        <Route path="accounts/update-profile" element={<UpdateProfile />} />
        //
      </Route>
    </Routes>
  );
}
