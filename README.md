# GrowthProAI – Mini Local Business Dashboard

This is a full stack application which simulates how small businesses can view their SEO content and Google Business data, a key feature of GrowthProAI.

## 🛠 Tech Stack

- **Frontend:** Vite + React + Tailwind CSS
- **Backend:** Node.js + Express

---

## 🌐 Features

### Frontend

- Responsive dashboard UI
- Input form:
  - Business Name
  - Location
- Display card after submission:
  - Simulated Google Rating
  - Number of Reviews
  - AI-generated SEO Headline
  - Button to regenerate headline
- Mobile-friendly design using Tailwind CSS

### Backend

#### Endpoints

1. `POST /business-data`

- **Request Body:**
  ```json
  {
    "name": "Cake & Co",
    "location": "Mumbai"
  }
