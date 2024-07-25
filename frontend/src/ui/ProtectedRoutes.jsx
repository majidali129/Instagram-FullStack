import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Loader from "../ui/Loader";
import toast from "react-hot-toast";

const ProtectedRoutes = ({ children }) => {
  const { user, loadingUser } = useUser();
  const isSignedIn = user?.isEmailVerified === true;
  const navigate = useNavigate();

  console.log(isSignedIn);
  useEffect(() => {
    if (!user && !loadingUser && !isSignedIn) {
      navigate("/accounts/login", { replace: true });
    }
  }, [loadingUser, user, navigate, isSignedIn]);

  if (loadingUser) return <Loader />;
  console.log(isSignedIn);

  if (!isSignedIn) {
    toast.error("Login please");
    navigate("/accounts/login", { replace: true });
  }

  if (isSignedIn) return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired
};
export default ProtectedRoutes;
