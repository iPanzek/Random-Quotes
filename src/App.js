import './App.css';
import React, {useState, useEffect} from 'react';
import Quotes from './components/Quotes';
import Button from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [quotes, setQuotes] = useState([]); 
  const [author, setAuthor] = useState('');
  const [tweet, setTweet] = useState('');

  const BASE_URL = "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";  
    
  const getQuotes = async () => {   
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const randomNum = Math.floor(Math.random() * data.length);
    const randomQuotes = data[randomNum];
    setQuotes(randomQuotes.quote);
    setAuthor(randomQuotes.author  === '' ? "Annonymous" : randomQuotes.author);
    setTweet(()=> `https://twitter.com/intent/tweet?hashtags=quotes&related=&text=${randomQuotes.quote} - ${randomQuotes.author}`);
  };
    
  useEffect(() => {
    getQuotes();  
  }, []);

return (
  < > 
    <div className="app-wrapper">
      <div>
        <Quotes 
          random="Random Quotes" 
          quotes={quotes}
          author={author}
      />
        <Button 
          getQuotes={getQuotes}
          tweetQuote={tweet}
          quoteButtonText="Get Quote" 
          tweetButtonText="Tweet Quote" 
          />  
      </div>
    </div>
      <div className="copyrights">
        <div>Design & coded by 
          <span className="copyrights-name">&copy;iPanzek</span> | Web.Mobile.Apps.<br /> All Rights Reserved!
        </div>
      </div>
        <div className="socials">
          <span>
            <a href="https://twitter.com/iPanzek" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x"/>Twitter
            </a>
          </span>
          <span>
            <a href="https://instagram.com/ipanzek/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />Instagram
            </a>
          </span>
          <span>
            <a href="https://github.com/ipanzek" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />GitHub
            </a>
          </span>
      </div>
  </>
);
}

export default App;