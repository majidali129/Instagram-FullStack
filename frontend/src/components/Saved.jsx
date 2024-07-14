import React from "react";

const Saved = () => {
  return (
    <section className="space-y-4  h-auto py-1">
      {/* SAVED POSTS LIST */}
      <div className="Feeds space-y-3 py-2 h-full">
        <h3>Saved Posts</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-3 sm:gap-3 gap-y-4 lg:grid-cols-6   justify-items-center lg:gap-y-4 ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
            <li className="">
              <figure className="md:h-[170px] md:w-[170px] 2xl:w-[200px] 2xl:h-[200px] h-[250px] w-[250px] rounded-md ">
                <img
                  src="https://images.unsplash.com/photo-1720719625643-999bfcc8228f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Saved;
