const UserReels = () => {
  return (
    <ul className=" columns-1 sm:columns-2 md:columns-3  lg:columns-4 *:mb-2 ">
      {[1, 2, 3, 4, 5].map((el) => (
        <li>
          <figure className="object-cover rounded-md ">
            <img
              src="https://images.unsplash.com/photo-1710444223962-a18f0de17a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full rounded-md"
            />
          </figure>
        </li>
      ))}
    </ul>
  );
};

export default UserReels;
