import { NavLink, Outlet, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Button from "../ui/Button";
import { Modal, ModalProvider } from "../ui/Modal";
import {
  followAccount as follow,
  getAccoutByUsername
} from "../api/services/user-service";
import Loader from "../ui/Loader";
import { useFetchPosts } from "../features/posts/useFetchPosts";
import { useUser } from "../features/authentication/useUser";
import UpdateProfile from "../features/authentication/UpdateProfile";

const About = () => {
  const { username } = useParams();
  const queryClient = useQueryClient();

  // for any profile
  const { data: profile, isLoading } = useQuery({
    queryKey: ["user-profile", username],
    queryFn: () => getAccoutByUsername(username)
  });
  // TO FOLLOW ACCOUNT
  const { mutate: followAccount, isPending: followingAccount } = useMutation({
    mutationKey: ["user"],
    mutationFn: follow,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries("user");
    },
    onError: (error) => toast.error(error?.message)
  });

  const { loadingPosts, posts } = useFetchPosts(username); // user created posts
  const { user: currentUser, loadingUser } = useUser(); // current logged in user
  const totalPosts = posts?.length,
    totalFollowers = profile?.followers.length,
    followingTo = profile?.following.length;

  if (isLoading || loadingPosts || loadingUser) return <Loader />;

  const isLoggedInUser = currentUser?.username === username;

  const profileData = {
    savedPosts: profile?.savedPosts,
    ownPosts: posts,
    likedPosts: currentUser?.likedPosts
  };
  const isAlreadyFollowed = profile?.followers.some(
    (follower) => follower._id === currentUser?._id
  );

  const followPayload = {
    targetId: profile?._id,
    currentId: currentUser?._id
  };
  return (
    <ModalProvider>
      <>
        <section className="py-3 space-y-10 ">
          {/* Profile Info */}
          <div className="flex flex-col items-center justify-center py-4 space-y-3 border-b border-b-zinc-700 md:flex-row gap-x-10 xl:gap-x-28 max-md:gap-y-3">
            <div className="border rounded-full lg:w-40 lg:h-40 w-28 h-28">
              <img
                src={profile?.avatar}
                alt=""
                className="object-bottom w-full h-full rounded-full"
              />
            </div>
            <div className="space-y-6 md:space-y-4">
              <div className="space-y-1 text-center">
                <div className="flex flex-col items-center md:flex-row max-md:gap-y-2 gap-x-5">
                  <h3>{profile?.username}</h3>
                  {isLoggedInUser && (
                    <Modal.Open opens="edit-profile">
                      <Button className="max-sm:!py-0.5">Edit Profile</Button>
                    </Modal.Open>
                  )}
                  {isAlreadyFollowed && (
                    <Modal.Open opens="menu-list">
                      <Button>
                        Following
                        <span>
                          <MdKeyboardArrowDown className="w-6 h-6" />
                        </span>
                      </Button>
                    </Modal.Open>
                  )}

                  {!isAlreadyFollowed && !isLoggedInUser && (
                    <Button
                      varient="primary"
                      className="!px-10"
                      disabled={followingAccount}
                      onClick={() => followAccount(followPayload)}
                    >
                      Follow
                    </Button>
                  )}
                </div>
              </div>
              <div className="flex max-sm:items-start max-sm:px-3 items-center max-sm:flex-col justify-between *:flex *:items-center *:gap-x-2 stats gap-x-6">
                <div>
                  <h4>{totalPosts}</h4>
                  <span className="text-gray">Posts</span>
                </div>
                <div>
                  <h4>{totalFollowers}</h4>
                  <span className="text-gray">Followers</span>
                </div>
                <div>
                  <h4>{followingTo}</h4>
                  <span className="text-gray">Following</span>
                </div>
              </div>
              <h4>{profile?.fullName}</h4>
            </div>
          </div>

          {/* user account media */}
          <div className="space-y-4">
            <ul className="flex items-center *:text-xl gap-x-10 md:gap-x-20 justify-center pb-2 w-full">
              {isLoggedInUser ? (
                personalAccTabs.map((tab) => (
                  <li key={tab.text}>
                    <NavLink
                      to={tab.path}
                      end
                      className={({ isActive }) =>
                        isActive ? "opacity-100 border-b" : "opacity-50"
                      }
                    >
                      {tab.text}
                    </NavLink>
                  </li>
                ))
              ) : (
                <li>
                  <NavLink to="/">Posts</NavLink>
                </li>
              )}
            </ul>
            <div>
              <Outlet context={[profileData]} />
            </div>
          </div>
        </section>
        <Modal.Window name="edit-profile">
          <UpdateProfile />
        </Modal.Window>
        <Modal.Window name="menu-list">
          <button
            onClick={() => followAccount(followPayload)}
            className="text-red-500"
          >
            Unfollow
          </button>
        </Modal.Window>
      </>
    </ModalProvider>
  );
};

export default About;

const personalAccTabs = [
  {
    path: "",
    text: "Posts"
  },
  {
    path: "liked-posts",
    text: "Likes"
  },
  {
    path: "saved",
    text: "Saved"
  }
];
