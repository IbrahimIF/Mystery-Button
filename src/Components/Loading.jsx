import React from 'react';

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-300">
      <div className="pl">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="pl__dot animate-pulse"
            style={{
              animationDelay: `${index * 0.2}s`,
              zIndex: index < 5 ? 5 - index : index - 4,
            }}
          />
        ))}
        <div className="pl__text">Loading...</div>
      </div>
    </div>
  );
}

export default Loading;