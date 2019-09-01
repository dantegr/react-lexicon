import React from 'react';

const Results = ({word, frequency,additionalInfo, similarWords}) => {

  return(
    <div >
      <h2>{word}</h2>
    
      <p>Frequency: {frequency}</p>
      <p>Additinal inforation:<a href={additionalInfo}>{additionalInfo}</a></p>
     
      <ul>
          {similarWords.map(similarWord => (
             
            <li><a href={`https://en.wikipedia.org/wiki/${similarWord.word}`} >{similarWord.word}</a></li>
          ))}

      </ul>
      
    </div>
  );
};

export default Results;