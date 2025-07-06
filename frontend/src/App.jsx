import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBusinessData = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/business-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location })
    });
    const data = await res.json();
    setBusinessData(data);
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    const res = await fetch(
      `http://localhost:5000/regenerate-headline?name=${name}&location=${location}`
    );
    const data = await res.json();
    setBusinessData((prev) => ({ ...prev, headline: data.headline }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-white to-slate-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 my-6">GrowthProAI</h1>
      <p className="text-center text-gray-600 max-w-md mb-6">
        Discover your business insights and SEO content in seconds. Enter your business details to see how you appear online.
      </p>

      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Business Name *</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="e.g., Cake & Co"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">Location *</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="e.g., Mumbai"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
          onClick={fetchBusinessData}
          disabled={loading || !name || !location}
        >
          {loading ? 'Loading...' : '🚀 Get Business Insights'}
        </button>
      </div>

      {businessData && (
        <div className="mt-8 w-full max-w-lg bg-white rounded-xl shadow-lg p-6 space-y-3 text-center">
          <p className="text-xl font-semibold text-gray-800">⭐ Google Rating: {businessData.rating}</p>
          <p className="text-gray-600">📢 {businessData.reviews} Reviews</p>
          <p className="text-gray-800 italic">🧠 SEO Headline: “{businessData.headline}”</p>

          <button
            onClick={regenerateHeadline}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
          >
            🔁 Regenerate SEO Headline
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
