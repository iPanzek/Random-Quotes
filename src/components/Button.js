import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';

const Button = ({tweetQuote, getQuotes, quoteButtonText, tweetButtonText}) => (

  <div className="button-wrapper" id="quote-box">
    <div>
      <button 
        onClick={getQuotes}>
          <a id="tweet-quote" 
          target="_blank" rel="noreferrer" 
          href={tweetQuote}>
          <FontAwesomeIcon icon={faTwitter} size="2x" /> 
          {tweetButtonText} 
          </a>
      </button>
    </div>
    <div id="new-quote">
      <button 
        onClick={getQuotes}>
          <FontAwesomeIcon icon="quote-left" size="2x" />
          {quoteButtonText}
      </button>
    </div>
  </div>      
);

export default Button;
