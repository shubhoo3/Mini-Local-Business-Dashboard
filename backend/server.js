const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover the Magic of {name} in {location}",
  "{name} Sets the Bar for Quality in {location}",
  "What Makes {name} a Local Favorite in {location}?",
  "Inside {name}: The Heart of {location}'s Business Scene"
];

function generateHeadline(name, location) {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace('{name}', name).replace('{location}', location);
}

 //business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: "Name and location are required" });
  }

  const data = {
    rating: (Math.random() * 1.5 + 3.5).toFixed(1), // 3.5 - 5.0
    reviews: Math.floor(Math.random() * 500 + 10), // 10 - 510
    headline: generateHeadline(name, location)
  };

  res.json(data);
});

//regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: "Missing name or location" });
  }

  const headline = generateHeadline(name, location);
  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
