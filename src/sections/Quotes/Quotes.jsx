import { useEffect, useState } from "react";

export default function Quotes() {
  const [tags, setTags] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [searchTag, setSearchTag] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchTags() {
      const data = await fetch("https://api.quotable.io/tags");
      const jsonData = await data.json();
      const last = jsonData.pop();
      setTags(jsonData);
      setSearchTag(jsonData[0].slug);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchQuotes() {
      const data = await fetch(
        `https://api.quotable.io/quotes?tags=${searchTag}`
      );
      const jsonData = await data.json();
      setQuotes(jsonData.results);
      if (!loaded) {
        setTimeout(() => {
          setLoaded(true);
        }, 1000);
      }
    }
    fetchQuotes();
  }, [searchTag, setSearchTag, loaded]);

  const copyQuote = (event) => {
    const quoteId = event.target.id;
    const quote = quotes.find((quote) => quote._id === quoteId);
    window.navigator.clipboard.writeText(quote.content);
    const copied = document.getElementById(quoteId).nextSibling;
    copied.classList.replace("text-gray-900", "text-green-700");
    copied.innerHTML = "Copied&#33;";
    setTimeout(() => {
      copied.classList.replace("text-green-700", "text-gray-900");
      copied.innerHTML = "Copy&#33;";
    }, 1000);
  };

  return (
    <div className="h-full w-full flex items-center justify-center pt-4">
      <div className="h-full w-[90%] sm:max-w-[85%] sm:w-[85%] flex flex-col items-center">
        <div className="my-2">
          <h1 className="sm:text-4xl text-3xl tracking-wider">Top Quotes</h1>
        </div>
        <div className="w-full flex justify-center mt-3">
          <select
            name=""
            id=""
            value={searchTag}
            className="sm:w-1/4 w-[90%] rounded-md p-1 bg-gray-100 hover:bg-white active:bg-white focus:bg-white"
            onInput={(event) => {
              setSearchTag(event.target.value);
            }}>
            {tags.length > 0 &&
              tags.map((tag) => (
                <option key={tag._id} value={tag.slug}>
                  {tag.name}
                </option>
              ))}
          </select>
        </div>
        {loaded ? (
          <div
            className="w-full mt-3 h-fit sm:overflow-y-auto scrollbar"
            id="scroll">
            {quotes.length > 0 ? (
              quotes.map((Quote) => (
                <div
                  key={Quote._id}
                  className="sm:my-6 border sm:w-fit w-full sm:max-w-[95%] sm:ml-8 sm:mr-12 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 tracking-normal py-8 px-8 sm:px-16 flex flex-col relative">
                  <div className="sm:text-lg text-base leading-loose mb-3 sm:text-left text-center sm:mt-0 mt-3">
                    <blockquote>
                      <q>{Quote.content}</q>
                    </blockquote>
                  </div>
                  <div className="text-base w-full sm:text-right sm:ml-12 italic text-center mb-5">
                    <p>~{Quote.author}</p>
                  </div>
                  <div className="text-sm">
                    <p>Tags : {Quote.tags.join(", ")}</p>
                  </div>
                  <div className="absolute top-5 right-8">
                    <i
                      className="fa-regular fa-clipboard text-xl cursor-pointer hover:text-gray-700 active:text-gray-500"
                      id={Quote._id}
                      onClick={copyQuote}
                      onMouseEnter={(event) =>
                        document
                          .getElementById(event.target.id)
                          .nextSibling.classList.replace("hidden", "block")
                      }
                      onMouseLeave={(event) =>
                        document
                          .getElementById(event.target.id)
                          .nextSibling.classList.replace("block", "hidden")
                      }></i>
                    <p
                      className={`absolute text-xs font-semibold text-center top-[-25px] right-[-5px] hidden hover:top-[-10px] text-gray-900`}>
                      Copy&#33;
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-2 sm:text-2xl font-semibold">
                Sorry&#33; No Quotes Found for <q>{searchTag}</q>
              </p>
            )}
          </div>
        ) : (
          <div className="mt-5">Loading...</div>
        )}
      </div>
    </div>
  );
}
