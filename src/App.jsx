import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Quotes from "./sections/Quotes/Quotes";
import Inspiration from "./sections/Inspiration/Inspiration";
import Advice from "./sections/Advice/Advice";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[86vh] sm:h-[81vh] sm:min-w-[70vw] sm:mb-0 mb-10">
        <Routes>
          <Route path="" element={<Hero />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="inspiration" element={<Inspiration />} />
          <Route path="advice" element={<Advice />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
