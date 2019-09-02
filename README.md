## Lexicon App

### Usage
This application allows the user input a word and get back similar words along with some further information such as its frequency and a link to wikipedia with further info on the word.Additionaly the displayed words can be clicked in order to open another wikipedia page containing more info for each word. This app relys heavily on Gavagai's lexicon API in order to get the word data and parse it properly.

### How to run it.

You can the find the app deployed on [https://react-lexicon.dantegr.now.sh/](https://react-lexicon.dantegr.now.sh/).

In case you want to run it locally here is how you can do it: 

1. Make sure you have installed globally the most recent version on node.js
2. Clone this github repo to your computer
3. Open your favourite terminal app and navigate to folder you've just cloned.
4. Type `npm install` in order to download all the required node modules
5. Type `yarn start` in order to start the development server
6. Open [http://localhost:3000](http://localhost:3000) to view it in your favourite browser.


### Build with

* React - Javascript framework.
* SASS- CSS pre-processor that allows for extra functionality between css files.
* React Spinners - Spinner package that offers several spinners for your loading screens.
* Gavagai Lexicon Api - In order to receive the word data.
* Node.js - used to build and provide server status.

### Improvements

In order to make this application more usable several improvements must be implemented.

1. Implement a method that would let the user to use the application for more languages(at the moment the application runs only in english)
2. Several css improvements in order to make the application more pleasing to the eye.

