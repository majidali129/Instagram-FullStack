import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center justify-center h-screen p-10 bg-zinc-900">
      <div className="bg-zinc-950 border border-zinc-700 rounded p-10 flex-[0_1_40rem]">
        <h2 className="mb-5 leading-10">
          Oops! The page you are looking for could not be found 😢
        </h2>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
