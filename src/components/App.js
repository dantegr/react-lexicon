import React, {useEffect, useState} from 'react';
import Results from './Results';
import Header from './Header';
import Footer from './Footer';
import { css } from '@emotion/core';
import { ScaleLoader} from 'react-spinners';

function App() {

  const [word, setWord] = useState("");
  const [frequency, setFrequency] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [similarWords, setSimilarWords] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState ('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(()=> {
    getInfo();
   }, [query]);

   const override = css`
   display: block;
   margin: 0 auto;
   border-color: red;
   position: fixed;
   top: 40%;
   left: 50%;
   transform: translate(-50%, -50%);
 `;

   
  const getInfo = async () => {
    setIsLoading(true);
    try {
    setIsError(false);
    const responseLexicon= await fetch(`https://api.gavagai.se/v3/lexicon/en/${query}?additionalFields=SEMANTICALLY_SIMILAR_WORDS&apiKey=3acdef1f01cbceb88b132158abd466da&polarizeWord=false`);
    const dataLexicon = await responseLexicon.json();
    setWord(dataLexicon.wordInformation.word);
    setFrequency(dataLexicon.wordInformation.frequency);
    setAdditionalInfo(dataLexicon.wordInformation.additionalInformation.link);
    setSimilarWords(dataLexicon.semanticallySimilarWords);

    } catch (ex) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
 

  return (
    <div className="app">
      <Header />
      <div className="container">
      <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">Search</button>
      </form>
      </div>
      {isError ? (
            <p></p>
          ) : (
          <div>
          {isLoading ? (
            <div className='sweet-loading'>
            <ScaleLoader
              css={override}
              sizeUnit={"px"}
              size={30}
              color={'#006400'}
            />
            </div> 
          ) : (
            <div className="container">
                <Results
                word={word} frequency={frequency} additionalInfo={additionalInfo} similarWords={similarWords}/>
              </div>
            )}
            </div>
          )}
          <Footer />
      </div>
  );
}

export default App;
