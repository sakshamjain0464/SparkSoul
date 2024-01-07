import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [copyTextDisplay, setCopyTextDisplay] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchQuote() {
      const data = await fetch("https://api.quotable.io/quotes/random");
      const jsonData = await data.json();
      setQuote(jsonData[0].content);
      setAuthor(jsonData[0].author);
      setTimeout(() => {
        setLoaded(true);
      }, 100);
    }
    fetchQuote();
  }, []);

  const copyQuote = () => {
    window.navigator.clipboard.writeText(quote);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

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
            <div className="w-fit min-w-[80%] shadow-md relative hover:shadow-xl transition-all duration-500 px-16 py-16 text-lg tracking-wider rounded-md justify-self-center">
              <blockquote>
                <q>{quote}</q>
              </blockquote>
              <p className="italic text-right mt-2 mr-[-40px]">~ {author}</p>
              <div className="absolute top-5 right-8">
                <i
                  className="fa-regular fa-clipboard text-2xl cursor-pointer hover:text-gray-700 active:text-gray-500"
                  onClick={copyQuote}
                  onMouseEnter={() => setCopyTextDisplay(true)}
                  onMouseLeave={() => setCopyTextDisplay(false)}></i>
                <p
                  className={`absolute text-xs font-semibold text-center top-[-25px] right-[-5px]  ${
                    copyTextDisplay ? "block" : "hidden"
                  } ${"hover:top-[-10px]"} ${
                    copied ? "text-green-700" : "text-gray-900"
                  }`}>
                  {copied ? "Copied" : "Copy"}&#33;
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-5">Loading...</div>
          )}
        </div>
        <div className="mt-8">
          <Link
            to="/quotes"
            className="bg-gray-800 mt-8 px-5 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white">
            Get More Quotes <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
