import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Loader from "../ui/Loader";

const ProtectedRoutes = ({ children }) => {
  const { user, loadingUser } = useUser();
  const isSignedIn = user?.isEmailVerified === true;
  const navigate = useNavigate();

  console.log(isSignedIn);
  useEffect(() => {
    if (!user && !loadingUser) {
      navigate("/accounts/login", { replace: true });
    }
  }, [loadingUser, user, navigate]);

  if (loadingUser) return <Loader />;

  if (isSignedIn) return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired
};
export default ProtectedRoutes;
