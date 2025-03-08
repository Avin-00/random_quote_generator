import React, { useState, useEffect } from "react";
import axios from "axios";
import './randomQuote.css' // Import CSS file.

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Function to fetch a random quote.
  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      const quotesArray = response.data.quotes;
      const randomIndex = Math.floor(Math.random()*quotesArray.length);
      setQuote(quotesArray[randomIndex].quote);
      setAuthor(quotesArray[randomIndex].author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // Fetch a quote on component mount.
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    
    <div className="quote-container">
      <div className="quote-box">
        <img style={{borderRadius : "60px"}} src={`./${author}.jpeg`} alt={author} className="author-image" />
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
        <button onClick={fetchQuote} className="new-quote-btn"> New Quote <i className ="fa-solid fa-spinner fa-spin-pulse"></i></button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
