import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { getRandomQuote } from './quoteData.js';
import Quote from './components/Quote.jsx';
import { useEffect, useState } from 'react';

// https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

function App() {
  const [quote, setQuote] = useState(() => {
    return getRandomQuote()
  });

  // Used for fetch api?
  // useEffect(() => {
  //   setQuote(getRandomQuote());
  // }, [])

  function handleClick() {
    const newQuote = getRandomQuote();
    setQuote({
      ...quote,
      ...newQuote
    });
  }

  return (
    <>
      <Card id="quote-box" style={{ maxWidth: '32rem'}}>
        <Card.Body>
          <Card.Text as="div">
            <Quote text={quote.text} author={quote.author} />
          </Card.Text>
            <a 
              id="tweet-quote" 
              href={`https://twitter.com/intent/tweet?text=${encodeURI(quote.text)}`}
              aria-label="Tweet current quote"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"/></svg>
            </a>
            <Button 
              id="new-quote" 
              onClick={handleClick} 
              variant="dark" 
              size="lg" 
              className="ms-auto btn-cta"
              aria-label="Random new quote"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"/></svg>
            </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default App
