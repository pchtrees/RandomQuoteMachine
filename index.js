function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();
            
            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[randIndex])
        }
        fetchData();            
    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[randIndex])
    }

    return (
        <div className="container border flex mt-20 border-solid border-pink-300 mx-auto w-1/2">
            <div className="card container p-2 ">
                <div className="card border border-solid border-pink-300 rounded-sm">
                    <div className="card-header bg-purple-300 rounded-t-sm text-center">Quotes
                      </div> 
                       <div className="card-body p-2">
                            {randomQuote ? (
                                <>
                                <p className="card-text">&quot;{randomQuote.text}&quot;</p> 
                                <p className="card-title text-end">- {randomQuote.author || "No author"}</p>
                                </>
                            ) : (
                                <h2>Loading</h2>    
                            )}

                            <div className="row">
                                <button onClick={getNewQuote}>
                                <i class="fa-solid fa-rotate-right"></i>
                                </button>
                                <button>
                                    <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" 
                                        + encodeURIComponent (
                                            '"' + randomQuote.text + '" ' + randomQuote.author
                                        )}
                                        target="_blank" className="btn">
                                    <i className="fa-brands fa-twitter"></i>
                                </a></button>
                                <button>
                                    <a href={"https://www.tumblr.com/widgets/share/tool?canonicalUrl=&caption="
                                        + enCodeURIComponent (randomQuote.author) + '&content= ' + 
                                        randomQuote.author +
                                        encodeURIComponent (randomQuote.text) +
                                        ""
                                        )}>
                                    <i className="fa-brands fa-tumblr"></i></a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))