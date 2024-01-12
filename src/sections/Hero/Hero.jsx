import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuoteCard from "../../components/QuoteCard/QuoteCard";

export default function Hero() {
  const [quote, setQuote] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const data = await fetch("https://api.quotable.io/quotes/random");
        const jsonData = await data.json();
        setQuote(jsonData[0]);
        setTimeout(() => {
          setLoaded(true);
        }, 100);
      } catch (error) {
        alert("Api not reachable, Kindly try after some time");
      }
    }
    fetchQuote();
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-full w-[90%] sm:max-w-[75%] sm:w-fit mt-5 sm:mt-20">
        <div className="w-full flex items-center justify-center flex-col mb-10 text-center">
          <h1 className="sm:text-5xl text-3xl mb-5 ">Welcome to SparkSoul</h1>
          <p className="text-xl tracking-widest">
            Your one stop destination for all quotes.
          </p>
        </div>
        <div className="flex justify-center flex-col w-full">
          <div className="text-gray-900">
            <h1 className="text-3xl tracking-wider font-medium">
              Today&apos;s Quote
            </h1>
          </div>
          {loaded ? (
            <QuoteCard Quote={quote} />
          ) : (
            <div className="mt-5">Loading...</div>
          )}
        </div>
        <div className={`${loaded ? "mt-2" : "mt-8"}`}>
          <Link
            to="/quotes"
            className="bg-gray-800 px-5 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white">
            Get More Quotes <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
