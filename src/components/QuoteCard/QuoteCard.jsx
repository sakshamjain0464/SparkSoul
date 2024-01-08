
import PropTypes from 'prop-types'

export default function QuoteCard({Quote}) {

    const copyQuote = (event) => {
        const quoteId = event.target.id;
        const quote = event.target.parentElement.parentElement.firstChild.firstChild.firstChild.innerHTML
        window.navigator.clipboard.writeText(quote);
        const copied = document.getElementById(quoteId).nextSibling;
        copied.classList.replace("text-gray-900", "text-green-700");
        copied.innerHTML = "Copied&#33;";
        setTimeout(() => {
          copied.classList.replace("text-green-700", "text-gray-900");
          copied.innerHTML = "Copy&#33;";
        }, 1000);
      };

  return (
    <div
      className="sm:my-6 border sm:w-fit w-full sm:max-w-[95%] sm:ml-8 sm:mr-12 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 tracking-normal py-8 px-8 sm:px-16 flex flex-col relative">
      <div className="sm:text-lg text-base leading-loose mb-3 sm:text-left text-center sm:mt-0 mt-3">
        <blockquote>
          <q>{Quote.content}</q>
        </blockquote>
      </div>
      <div className="text-base w-full sm:text-right sm:ml-12 italic text-center mb-5">
        <p>~{Quote.author}</p>
      </div>
      {Quote.tags && <div className="text-sm">
        <p>Tags : {Quote.tags.join(", ")}</p>
      </div>}
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
  );
}

QuoteCard.propTypes = {
  Quote : PropTypes.object.isRequired
}
