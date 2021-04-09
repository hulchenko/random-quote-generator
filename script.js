let API = 'https://type.fit/api/quotes'; //JSON data

function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState('');

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

  const getNewQuote = () => {
    let randIndex = Math.floor(Math.random() * quotes.length); //get random quote index
    setRandomQuote(quotes[randIndex]);
  };

  return (
    <div className="container pt-5">
      <div className="container">
        <div className="card">
          <div className="card-header">Inspirational Quotes</div>
          <div className="card-body">
            {randomQuote ? ( // <> and </> are fragments in React to return elements as one block
              <>
                <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                <h5 className="card-title">
                  - {randomQuote.author || 'Unknown'}
                </h5>
              </>
            ) : (
              <h2>Loading</h2> //in case quote hasn't loaded
            )}
            <div className="justify-content-md-center">
              <button onClick={getNewQuote} className="btn btn-primary ml-3">
                New Quote
              </button>
              <a
                href={'https://twitter.com/intent/tweet'}
                target="_blank"
                className="btn btn-warning"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a href="" className="btn btn-danger">
                <i className="fa fa-tumblr"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
