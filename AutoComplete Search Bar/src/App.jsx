import { useState, useEffect } from "react";
import "./App.css";
function App() {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [cache, setCache] = useState({});
    const fetchData = async () => {
        if (cache[input]) {
            setResults(cache[input]);
            return;
        }
        const data = await fetch(
            "https://dummyjson.com/recipes/search?q=" + input
        );
        const json = await data.json();
        setCache((prev) => ({ ...prev, [input]: json?.recipes }));
        setResults(json?.recipes);
    };
    useEffect(() => {
        const timer = setTimeout(fetchData, 300);
        // fetchData();
        return () => {
            clearTimeout(timer);
        };
    }, [input]);
    return (
        <>
            <h1>AutoComplete Search Bar</h1>
            <input
                className="search-input"
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setShowResults(true)}
                onBlur={() => setShowResults(false)}
            />
            {showResults && (
                <div className="results-container">
                    {results?.map((result) => (
                        <span className="result" key={result?.id}>
                            {result?.name}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
}

export default App;
