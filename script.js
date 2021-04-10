let API = 'https://type.fit/api/quotes'; //JSON data

function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState('');
  const [color, setColor] = React.useState('#fff'); //default

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
    var colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#BDBB99',
      '#77B1A9',
      '#73A857',
    ];

    let randIndex = Math.floor(Math.random() * quotes.length); //get random quote index
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randIndex]);
    setColor(colors[randColorIndex]);
  };

  return (
    <div
      className="main"
      style={{ backgroundColor: color, minHeight: '100vh' }}
    >
      <div className="container pt-5">
        <div className="container">
          <div className="card">
            <div
              className="card-header"
              style={{
                backgroundColor: color,
                filter: 'brightness(135%)',
              }}
            >
              Inspirational Quotes
            </div>
            <div
              className="card-body"
              style={{
                backgroundColor: color,
                filter: 'brightness(95%)',
              }}
            >
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
              <div className="form-horizontal">
                <div className="">
                  <button onClick={getNewQuote} className="btn btn-danger">
                    New Quote
                  </button>
                  <a
                    href={
                      'https://twitter.com/intent/tweet?hashtags=quote&related=freecodecamp&text=' +
                      encodeURIComponent(
                        '"' +
                          randomQuote.text +
                          '" ' +
                          '- ' +
                          randomQuote.author
                      )
                    }
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
