import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuoteCard from '../../components/QuoteCard/QuoteCard'

export default function Hero() {
  const [quote, setQuote] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchQuote() {
      const data = await fetch("https://api.adviceslip.com/advice");
      const jsonData = await data.json();
      setQuote({_id : jsonData.slip.id, content:jsonData.slip.advice, author: 'SparkSoul'});
      setTimeout(() => {
        setLoaded(true);
      }, 100);
    }
    fetchQuote();
  }, []);


  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-full w-[90%] sm:max-w-[75%] sm:w-fit mt-5 sm:mt-20">
        <div className="flex justify-center flex-col w-full">
          <div className="text-gray-900">
            <h1 className="text-3xl tracking-wider font-medium">
              Today&apos;s Advice
            </h1>
          </div>
          {loaded ? (
            <QuoteCard Quote={quote}/>
          ) : (
            <div className="mt-5">Loading...</div>
          )}
        </div>
        <div className={`${(loaded)?'mt-2':'mt-8'} flex justify-center w-full`}>
          <Link
            to="/inspiration"
            className="bg-gray-800 px-5 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white w-fit">
            Get Inspired <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
