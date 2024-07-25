import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import AuthLayout from "./ui/AuthLayout";
import Feeds from "./pages/Feeds";
import Reels from "./pages/Reels";
import Explore from "./pages/Explore";
import BookMarks from "./pages/Bookmarks";
import About from "./pages/About";
import CreatePost from "./features/posts/CreatePost";
import UserPosts from "./features/posts/UserPosts";
import BookmarksList from "./features/posts/BookmarksList";
import SignUp from "./features/authentication/SignUP";
import Login from "./features/authentication/Login";
import ResetPassword from "./features/authentication/ResetPassword";
import UpdatePassword from "./features/authentication/UpdatePassword";
import ForgotPassword from "./features/authentication/ForgotPassword";
import UpdateProfile from "./features/authentication/UpdateProfile";
import UserLikedPosts from "./features/posts/UserLikedPosts";
import PostDetails from "./features/posts/PostDetails";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./ui/PageNotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <ProtectedRoutes>
              <AppLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/" element={<Feeds />} />
          <Route path="explore" element={<Explore />} />
          <Route path="reels" element={<Reels />} />
          <Route path="bookmarks" element={<BookMarks />} />
          <Route path="add-post" element={<CreatePost />} />
          <Route path="/profile/:username" element={<About />}>
            <Route index element={<UserPosts />} />
            <Route path="saved" element={<BookmarksList />} />
            <Route path="liked-posts" element={<UserLikedPosts />} />
          </Route>
          <Route path="post/:postId" element={<PostDetails />} />
        </Route>

        <Route
          element={
            <ProtectedRoutes>
              <AuthLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="accounts/update-profile" element={<UpdateProfile />} />
          <Route path="accounts/update-password" element={<UpdatePassword />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="accounts/reset-password" element={<ResetPassword />} />
          <Route path="accounts/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="accounts/emailsignup" element={<SignUp />} />
        <Route path="accounts/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder="true"
        gutter={10}
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: "1rem",
            maxWidth: "600px",
            padding: "15px 18px",
            background: "#fff",
            color: "#09090b"
          },
          success: {
            duration: 5000,
            theme: {
              primary: "green",
              secondary: "black"
            }
          },
          error: {
            duration: 5000,
            theme: {
              primary: "red",
              secondary: "black"
            }
          }
        }}
      />
    </>
  );
}
