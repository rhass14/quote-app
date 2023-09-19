const btnQuote = document.getElementById("btnQuote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function addNewQuote() {
  const request = await fetch("https://dummy-apis.netlify.app/api/quote");
  const response = await request.json();

  quote.innerText = response.quote;
  author.innerText = response.author;
}
addNewQuote();

btnQuote.addEventListener("click", addNewQuote);
