function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#D8BFD8")

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
            const colors = [
                "#FFC0CB",
                "#FAEBD7",
                "#F8F8FF",
                "#F0FFFF",
                "#F5DEB3",
                "#FFE4E1",
                "#E6E6FA",
                "#FFEFD5",
            ];
        
        let randIndex = Math.floor(Math.random() * quotes.length)
        let randomColorIndex = Math.floor(Math.random() * colors.length)
        setRandomQuote(quotes[randIndex])
        setColor(colors[randomColorIndex])
    }
    return (
        <div className="flex items-center transition-all" style={{backgroundColor:color, minHeight: "100vh"}}>
        <div className="container border border-solid flex border-pink-300 mx-auto w-1/2" >
            <div className="card container align-center p-2">
                <div className="card border border-solid border-pink-300 rounded-sm">
                    <div className="card-header bg-purple-300 rounded-t-sm text-center">Quotes
                      </div> 
                       <div className="card-body bg-gray-300 p-2 text-wrap">
                            {randomQuote ? (
                                <>
                                <p className="card-text">&quot;{randomQuote.text}&quot;</p> 
                                <p className="card-title text-end">- {randomQuote.author || "No author"}</p>
                                </>
                            ) : (
                                <h2>Loading</h2>    
                            )}

                            <div className="row flex justify-between ">
                                <div className="row_1 flex gap-3 ">
                                <button>
                                    <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" 
                                        + encodeURIComponent (
                                            '"' + randomQuote.text + '" ' + randomQuote.author
                                        )}
                                        target="_blank" className="btn border border-solid border-pink-300 rounded-sm bg-purple-300">
                                    <i className="fa-brands fa-twitter text-blue-500 w-6"></i>
                                </a></button>
                                <button>
                                    <a href={"https://www.tumblr.com/widgets/share/tool?canonicalUrl=&caption="
                                        + encodeURIComponent (randomQuote.author) + '&content= ' + 
                                        randomQuote.author +
                                        encodeURIComponent (randomQuote.text) +
                                        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
                                    }
                                        target="_blank" className="btn border border-solid border-pink-300 rounded-sm bg-purple-300">
                                    <i className="fa-brands fa-tumblr text-blue-950 w-6"></i>
                                </a></button>
                                </div>
                                <div className="row_2 "></div>
                            <button onClick={getNewQuote} className="btn border border-solid border-gray-500 rounded-sm border-pink-400 bg-purple-300">
                                <i class="fa-solid fa-rotate-right w-6 text-pink-600"></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app')) 