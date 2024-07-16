const Explore = () => {
  return (
    <section className="space-y-4  h-auto py-1">
      <div className="Feeds space-y-5 py-2 h-full">
        <h2>Explore</h2>
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3 gap-y-4 md:grid-cols-3   justify-items-center lg:gap-y-4 "> */}
        <ul className=" sm:columns-2 md:columns-3 2xl:columns-4 *:mb-4 ">
          {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => ( */}
          <li>
            <figure className="object-cover rounded-md ">
              <img
                src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-full h-full rounded-md"
              />
            </figure>
          </li>
          <li>
            <figure className="object- rounded-md ">
              <img
                src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-full h-full rounded-md"
              />
            </figure>
          </li>
          <li>
            <figure className="object- rounded-md ">
              <img
                src="https://images.pexels.com/photos/1657332/pexels-photo-1657332.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-full h-full rounded-md"
              />
            </figure>
          </li>
          <li>
            <figure className="object- rounded-md ">
              <img
                src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-full h-full rounded-md"
              />
            </figure>
          </li>
          {/* ))} */}
        </ul>
      </div>
    </section>
  );
};

export default Explore;
