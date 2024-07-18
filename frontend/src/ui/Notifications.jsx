import Avatar from "./Avatar";
import {ModalProvider, useModalContext } from "./Modal";

const Notifications = () => {
  const { close } = useModalContext();
  return (
    <ModalProvider>
      <>
        <div className="bg-zinc-50 w-[340px] md:w-96 *:py-4  h-[75vh] rounded overflow-hidden">
          <div className="px-4 border-b  border-b-zinc-400">
          <h3 className="font-semibold  text-start text-zinc-950">
            Notifications
          </h3>
          </div>
          <ul className="space-y-2 bg-zinc-300 notifications h-full *:px-4 *:border-b *:border-b-zinc-400 *:py-2.5 *:grid *:grid-cols-[50px_1fr] *:gap-x-2 md:*:gap-x-5 !overflow-y-scroll">
            <li onClick={() => close()}>
              <Avatar />
              <div>
                <div className="opacity-80 text-sm md:text-[1rem] text-black *:text-black">
                  <h4 className="inline-block  font-semibold tracking-wide capitalize me-1.5">
                    {"username"}
                  </h4>
                  Started following you. Click here to view his profile
                </div>
                <p className="flex items-center justify-between w-full">
                  <span className="text-sm opacity-60 text-zinc-950">2 hours age</span>
                  <span className="text-blue-500 text-[.9rem] cursor-pointer">Mark as read</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

      </>
    </ModalProvider>
  );
};

export default Notifications;
