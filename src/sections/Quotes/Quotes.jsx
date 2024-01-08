import { useEffect, useState } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";

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
                <QuoteCard key={Quote._id} Quote={Quote}/>
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
