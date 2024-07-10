import HorizontalCard from "./HorizontalCard";
import Post from "./Post";
import Stories from "./Stories";

const Feeds = () => {
  return (
    <section className="grid sm:grid-cols-[1fr_340px] gap-x-8 w-full h-full overflow-y-scroll py-5">
      <section className="space-y-3">
        <div className="w-full sm:w-[85%] mx-auto">
          <Stories />
        </div>
        <ul className="flex flex-col gap-y-3">
          <Post />
          <Post />
          <Post />
        </ul>
      </section>
      <aside className="hidden sm:block w-[90%]">
        <div className="profile-section ">
          <HorizontalCard
            username="salman102"
            info="New to instagram"
            actionText="Switch"
            image=""
          />
        </div>
        <div className="suggestions">
          <p className="flex items-center justify-between">
            <span className="text-lg opacity-50">Suggested for you</span>
            <span>See all</span>
          </p>

          <ul className="flex items-start flex-col justify-start gap-y-0.5">
            <HorizontalCard
              username="majidali129"
              info="Suggested for you"
              image=""
              actionText="follow"
            />
            <HorizontalCard
              username="majidali129"
              info="Suggested for you"
              image=""
              actionText="follow"
            />
            <HorizontalCard
              username="majidali129"
              info="Suggested for you"
              image=""
              actionText="follow"
            />
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default Feeds;
