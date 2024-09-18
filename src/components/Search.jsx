import React from 'react';

const Search = ({ onSearch, setWord, word }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (word) {
      onSearch(word); // Trigger search with the input word
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-4">
      <input 
        type="text" 
        value={word} 
        onChange={(e) => setWord(e.target.value)} 
        placeholder="Enter a word"
        className="p-2 border border-gray-300 rounded-md"
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
