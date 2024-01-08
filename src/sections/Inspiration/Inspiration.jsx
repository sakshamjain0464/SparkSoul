import {useState, useEffect}from 'react'
import QuoteCard from '../../components/QuoteCard/QuoteCard';

export default function Inspiration() {
  const [quotes, setQuotes] = useState([]);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    async function fetchQuotes() {
      const data = await fetch(
        `https://type.fit/api/quotes`
      );
      const jsonData = await data.json();
      const inspirationalQuotes = [];
      jsonData.forEach((quote, index) => {
        inspirationalQuotes.push({_id:index, content:quote.text, author: quote.author.split(',')[0]})
      });
      setQuotes(inspirationalQuotes);
      if (!loaded) {
        setTimeout(() => {
          setLoaded(true);
        }, 1000);
      }
    }
    fetchQuotes();
  }, [loaded]);


  return (
    <div className="h-full w-full flex items-center justify-center pt-4">
      <div className="h-full w-[90%] sm:max-w-[85%] sm:w-[85%] flex flex-col items-center">
        <div className="my-2">
          <h1 className="sm:text-4xl text-3xl tracking-wider">Inspirational Quotes</h1>
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
                Sorry&#33; No inspirational Quotes Available for now!
              </p>
            )}
          </div>
        ) : (
          <div className="mt-5">Loading...</div>
        )}
      </div>
    </div>
  )
}
