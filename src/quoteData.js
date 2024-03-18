import { quotes } from "./data/data.js";

function getRandomQuote() {
  const random = getRandomQuoteId();

  return quotes[random] || null;
}

function getRandomQuoteId() {
  const random = Math.floor(Math.random() * quotes.length);

  return random;
}

function getQuote(id) {
  return quotes.find((q, index) => index === id);
}

export { getRandomQuote, getRandomQuoteId, getQuote };
