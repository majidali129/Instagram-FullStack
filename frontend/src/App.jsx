import { Route, Routes } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import AppLayout from './ui/AppLayout'
import AuthLayout from './ui/AuthLayout'
import Feeds from './pages/Feeds'
import Reels from './pages/Reels'
import Explore from './pages/Explore'
import BookMarks from './pages/Bookmarks'
import About from './pages/About'
import CreatePost from './features/posts/CreatePost'
import UserPosts from './features/posts/UserPosts'
import UserSavedPosts from './features/posts/UserSavedPosts'
import UserReels from './features/reels/UserReels'
import SignUp from './features/authentication/SignUP'
import Login from './features/authentication/Login'
import ResetPassword from './features/authentication/ResetPassword'
import UpdatePassword from './features/authentication/UpdatePassword'
import UpdateProfile from './features/authentication/UpdateProfile'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Feeds />} />
          <Route path="explore" element={<Explore />} />
          <Route path="reels" element={<Reels />} />
          <Route path="bookmarks" element={<BookMarks />} />
          <Route path="add-post" element={<CreatePost />} />
          <Route path="profile/:username" element={<About />}>
            <Route index element={<UserPosts />} />
            <Route path="saved" element={<UserSavedPosts />} />
            <Route path="reels" element={<UserReels />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="accounts/emailsignup" element={<SignUp />} />
          <Route path="accounts/login" element={<Login />} />
          <Route path="accounts/password/reset/" element={<ResetPassword />} />
          {/* user well provide email, get password reset mail from server */}
          <Route path="accounts/update-password" element={<UpdatePassword />} />
          <Route path="accounts/update-profile" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster

      position="top-right"
      reverseOrder="true"
      gutter={10}
      toastOptions={{
        duration: 5000,
        style: {
          fontSize: '1rem',
            maxWidth: '600px',
            padding: '15px 18px',
            background: "#fff",
            color: "#09090b",
        },
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black'
          }
        },
        error: {
          duration: 5000,
          theme: {
            primary: 'red',
            secondary: 'black'
          },
        }
      }}
/>
    </>
  );
}
