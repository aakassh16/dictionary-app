import React from 'react';

const Result = ({ result }) => {
  if (!result) {
    return null; // Don't render anything if no result
  }

  return (
    <div className="mt-6 bg-white p-4 rounded-md shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-semibold">{result.word}</h2>
      {result.phonetic && <p className="italic">{result.phonetic}</p>}
      {result.meanings && (
        <div>
          <p className="mt-2">{result.meanings[0].definitions[0].definition}</p>
        </div>
      )}
    </div>
  );
};

export default Result;
