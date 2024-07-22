import { NavLink, Outlet, useParams } from "react-router-dom";
import Button from "../ui/Button";
import { Modal, ModalProvider } from "../ui/Modal";
import { useQuery } from "@tanstack/react-query";
import { getAccoutByUsername } from "../api/services/user-service";
import Loader from "../ui/Loader";
import { useFetchPosts } from "../features/posts/useFetchPosts";
import { useUser } from "../features/authentication/useUser";

const About = () => {
  const {username} = useParams()
  // for any profile
  const {data:profile, isLoading} = useQuery({
    queryKey: ['user-profile', username],
    queryFn: () => getAccoutByUsername(username)
  })

  const {loadingPosts, posts} = useFetchPosts(username); // user created posts
  const {user:currentUser, loadingUser} = useUser(); // current logged in user
  const totalPosts = posts?.length, totalFollowers=profile?.followers.length, followingTo=profile?.following.length

  if(isLoading || loadingPosts || loadingUser) return <Loader />

const isLoggedInUser = currentUser?.username === username;
  const profileData={
    savedPosts: profile?.savedPosts,
    ownPosts: posts,
    likedPosts: currentUser?.likedPosts
  }
  return (
    <ModalProvider >
      <>
    <section className="py-3 space-y-10 ">
      {/* Profile Info */}
      <div className="flex flex-col items-center justify-center py-4 space-y-3 border-b border-b-zinc-700 md:flex-row gap-x-10 xl:gap-x-28 max-md:gap-y-3">
        <div className="border rounded-full lg:w-40 lg:h-40 w-28 h-28">
          <img src={profile?.avatar} alt="" className="object-bottom w-full h-full rounded-full" />
        </div>
        <div className="space-y-6 md:space-y-4">
          <div className="space-y-1 text-center">
            <div className="flex flex-col items-center md:flex-row max-md:gap-y-2 gap-x-5">
              <h3>{profile?.username}</h3>
              {isLoggedInUser ? <Modal.Open opens="edit-profile"><Button>Edit Profile</Button></Modal.Open>:
              <Button varient='primary' className="!px-10" >Follow</Button>
              }
            </div>
          </div>
          <div className="flex items-center max-sm:flex-col justify-between *:flex *:items-center *:gap-x-2 stats gap-x-6">
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
        <ul className="flex items-center *:text-xl *:opacity-50 gap-x-10 md:gap-x-20 justify-center pb-2 w-full">
          {isLoggedInUser?  personalAccTabs.map((tab) => (
            <li key={tab.text}>
              <NavLink
                to={tab.path}
                className={({ isActive }) => (isActive ? "active-tab" : "")}
                end
              >
                {tab.text}
              </NavLink>
            </li>
          )): randomUserTabs.map((tab) => (
            <li key={tab.text}>
              <NavLink
                to={tab.path}
                className={({ isActive }) => (isActive ? "active-tab" : "")}
                end
              >
                {tab.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <Outlet context={[profileData]}/>
        </div>
      </div>
    </section>
    <Modal.Window name="edit-profile">
      <h2>Edit Profile Form</h2>
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
const randomUserTabs= [
  {
    path: "",
    text: "Posts"
  },
];
