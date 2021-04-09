let API = 'https://type.fit/api/quotes'; //JSON data

function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length); //get random quote index
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);
  return (
    <div>
      Hello World!
      {quotes.map((quote) => (
        <div>{quote.text}</div> //text property inside JSON file
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
