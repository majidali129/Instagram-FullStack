import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import PropTypes from "prop-types";

import Loader from "./ui/Loader";
const AppLayout = lazy(() => import("./ui/AppLayout"));
const AuthLayout = lazy(() => import("./ui/AuthLayout"));
const Feeds = lazy(() => import("./pages/Feeds"));
const Explore = lazy(() => import("./pages/Explore"));
const BookMarks = lazy(() => import("./pages/Bookmarks"));
const About = lazy(() => import("./pages/About"));
const CreatePost = lazy(() => import("./features/posts/CreatePost"));
const UserPosts = lazy(() => import("./features/posts/UserPosts"));
const BookmarksList = lazy(() => import("./features/posts/BookmarksList"));
const UserLikedPosts = lazy(() => import("./features/posts/UserLikedPosts"));
const PostDetails = lazy(() => import("./features/posts/PostDetails"));
const ProtectedRoutes = lazy(() => import("./ui/ProtectedRoutes"));
const PageNotFound = lazy(() => import("./ui/PageNotFound"));
const SignUp = lazy(() => import("./features/authentication/SignUP"));
const Login = lazy(() => import("./features/authentication/Login"));
const ResetPassword = lazy(() =>
  import("./features/authentication/ResetPassword")
);
const UpdatePassword = lazy(() =>
  import("./features/authentication/UpdatePassword")
);
const ForgotPassword = lazy(() =>
  import("./features/authentication/ForgotPassword")
);
const UpdateProfile = lazy(() =>
  import("./features/authentication/UpdateProfile")
);

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <ProtectedRoutes>
              <SuspenseWrapper>
                <AppLayout />
              </SuspenseWrapper>
            </ProtectedRoutes>
          }
        >
          <Route
            path="/"
            element={
              <SuspenseWrapper>
                <Feeds />
              </SuspenseWrapper>
            }
          />
          <Route
            path="explore"
            element={
              <SuspenseWrapper>
                <Explore />
              </SuspenseWrapper>
            }
          />
          <Route
            path="bookmarks"
            element={
              <SuspenseWrapper>
                <BookMarks />
              </SuspenseWrapper>
            }
          />
          <Route
            path="add-post"
            element={
              <SuspenseWrapper>
                <CreatePost />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/profile/:username"
            element={
              <SuspenseWrapper>
                <About />
              </SuspenseWrapper>
            }
          >
            <Route
              index
              element={
                <SuspenseWrapper>
                  <UserPosts />
                </SuspenseWrapper>
              }
            />
            <Route
              path="saved"
              element={
                <SuspenseWrapper>
                  <BookmarksList />
                </SuspenseWrapper>
              }
            />
            <Route
              path="liked-posts"
              element={
                <SuspenseWrapper>
                  <UserLikedPosts />
                </SuspenseWrapper>
              }
            />
          </Route>
          <Route
            path="post/:postId"
            element={
              <SuspenseWrapper>
                <PostDetails />
              </SuspenseWrapper>
            }
          />
        </Route>

        <Route
          element={
            <ProtectedRoutes>
              <AuthLayout />
            </ProtectedRoutes>
          }
        >
          <Route
            path="accounts/update-profile"
            element={
              <SuspenseWrapper>
                <UpdateProfile />
              </SuspenseWrapper>
            }
          />
          <Route
            path="accounts/update-password"
            element={
              <SuspenseWrapper>
                <UpdatePassword />
              </SuspenseWrapper>
            }
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route
            path="accounts/reset-password"
            element={
              <SuspenseWrapper>
                <ResetPassword />
              </SuspenseWrapper>
            }
          />
          <Route
            path="accounts/forgot-password"
            element={
              <SuspenseWrapper>
                <ForgotPassword />
              </SuspenseWrapper>
            }
          />
        </Route>
        <Route
          path="accounts/emailsignup"
          element={
            <SuspenseWrapper>
              <SignUp />
            </SuspenseWrapper>
          }
        />
        <Route
          path="accounts/login"
          element={
            <SuspenseWrapper>
              <Login />
            </SuspenseWrapper>
          }
        />
        <Route
          path="*"
          element={
            <SuspenseWrapper>
              <PageNotFound />
            </SuspenseWrapper>
          }
        />
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

SuspenseWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
