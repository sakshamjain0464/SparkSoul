import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[86vh] sm:h-[81vh] sm:min-w-[70vw] sm:mb-0 mb-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
