
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="h-full w-full flex justify-center">
      <div className="h-fit w-[90%] flex items-center sm:mt-20 mt-3 flex-col">
        <h1 className="text-slate-900 sm:text-5xl text-3xl mb-2">404!</h1>
        <h2 className="sm:text-3xl text-2xl mb-1">Not Found</h2>
        <p className="text-center text-xl mb-2">Sorry!, the page you are looking for <br /> does not exist!</p>
        <Link className="h-fit w-fit text-lg px-5 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700">Go To Home</Link>
      </div>
    </div>
  );
}
