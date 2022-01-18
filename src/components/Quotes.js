
import React from 'react';

const Quotes = ({random, quotes, author}) => (

  <div id="quote-box">
    <div>
      <div className="quotes-header">
        <h1>{random}</h1>
        <h5>
          ...the most inspiring expressions of mankind
        </h5>
        <hr />
      </div>
      <div >
        <div id="text">
          {quotes}
        </div>
        <div id="author">
          - {author}
        </div>
      </div>
    </div>
  </div>
);

export default Quotes;


