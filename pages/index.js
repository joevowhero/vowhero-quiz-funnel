export default function Home() {
  const handleClick = () => {
    window.location.href = "https://tally.so/r/w4DYZr"; // 👈 Replace this
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Plan a Wedding That Actually Feels Like You</h1>
        <p className="text-gray-700 text-lg mb-8">
          Skip the generic packages and Pinterest stress. In 2 minutes, this quiz helps define your wedding style and unlocks free planning tools that match your vibe.
        </p>
        <button
          onClick={handleClick}
          className="bg-indigo-600 text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Take Me to the Quiz
        </button>
      </div>
    </div>
  );
}

