import React, { useState } from "react";
import Search from "./components/Search";
import Result from "./components/Result";

const App = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);

  // Function to handle search, triggered by Search component
  const handleSearch = async (searchWord) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
    const data = await response.json();
    setResult(data[0]); // Set the fetched result
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
     <h1 className="text-4xl font-bold mb-10">Dictionary App</h1>
      <div>
        <Search onSearch={handleSearch} setWord={setWord} word={word} />
      </div>

      <div>
        <Result result={result} />
      </div>
    </div>
  );
}

export default App;
