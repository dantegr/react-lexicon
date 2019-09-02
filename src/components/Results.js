import React from 'react';

const Results = ({word, frequency,additionalInfo, similarWords}) => {

  return(
    <div className="results" >
      <div className="results-header">
        <h1 className="results-header__title capitalize">{word}</h1>
      </div>
      <div className="results-content">
      <p>Frequency: {frequency}</p>
      <p>Additinal inforation: <a href={additionalInfo}>{additionalInfo}</a></p>
      <hr />
      <div className="results-list">
      <ul>
          {similarWords.map(similarWord => (
             
            <li><a href={`https://en.wikipedia.org/wiki/${similarWord.word}`} >{similarWord.word}</a></li>
          ))}

      </ul>
      </div>
      </div>
    </div>
  );
};

export default Results;