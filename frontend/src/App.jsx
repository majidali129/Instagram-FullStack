import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Feeds from "./components/Feeds";
import Reels from "./components/Reels";
import Search from "./components/Search";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Chats from "./components/Chats";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Feeds />} />
          <Route path="reels" element={<Reels />} />
          <Route path="explore" element={<Explore />} />
          <Route path="search-something" element={<Search />} />
          <Route path="direct/inbox" element={<Chats />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}
