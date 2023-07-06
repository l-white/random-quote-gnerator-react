import { useState } from "react";
import axios from "axios";
import "./App.css";

const colors = ["blue", "orange", "green"];

function App() {
  return (
    <div className="App">
      <h1>Quote Viewer</h1>
      <Card />
    </div>
  );
}

export default App;

const Card = () => {
  const [quote, setQuote] = useState(
    "Life is what happens to you when you're busy making other plans."
  );
  const [author, setAuthor] = useState("John Lennon");

  const getQuotes = () => {
    axios
      .get(
        `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
      )
      .then((response) => {
        let dataQuotes = response.data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        return randomQuote;
      });
  };

  const handleClick = () => {
    getQuotes();
  };

  return (
    <div className="Card">
      <p>{quote}</p>
      <p>~{author}</p>
      <button onClick={handleClick}>New Quote</button>
    </div>
  );
};
