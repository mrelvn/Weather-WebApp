# 🌦 Weather App

A responsive and modern weather application named "*DailyClimate*" that displays real-time weather information for any city using the OpenWeatherMap API. Designed with simplicity, speed, and clean UI in mind — deployed seamlessly on *Vercel* with secure backend routing.


## 🔗 Live Demo
🌐 [View App](https://weather-web-app-nu-eight.vercel.app/)  
📁 [GitHub Repository](https://github.com/mrelvn/Weather-WebApp)


## ✨ Features
- 🔍 Search any city and get live weather info
- 📱 Responsive layout (mobile + desktop)
- 🌡 Shows temperature, humidity, wind speed, and conditions
- 🛡 API key is securely handled using a backend route
- ⚡ Fast, lightweight, and minimal UI


## 🛠 Tech Stack

| Category   | Technologies Used              |
|------------|--------------------------------|
| Frontend   | HTML, CSS, JavaScript          |
| Backend    | Node.js (Vercel Serverless Function) |
| API        | OpenWeatherMap API             |
| Deployment | Vercel                         |


## 🧠 How It Works

1. User enters a city name.
2. Frontend sends a request to /api/weather?city=CityName.
3. The backend route fetches weather data securely from OpenWeatherMap API using a hidden key.
4. Data is displayed on the UI.


## 🚀 Run Locally

### Prerequisites:
- Node.js and npm
- Vercel CLI (optional for local testing)

### Steps:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app

1. Create .env file (for local):

API_KEY=your_openweathermap_api_key

2. Install Vercel CLI (if not already):

npm install -g vercel

3. Run locally:

vercel dev


🔒 API Security

To avoid exposing the API key on the frontend, the app uses a serverless function (api/weather.js) deployed via Vercel. This acts as a middleware to securely handle all API requests to OpenWeatherMap.

🧠 Some backend help was taken via OpenAI’s ChatGPT.


🙌 Author

Made with ❤ by MrElvn (Farzan Ahmad)
Let’s connect on LinkedIn or explore my GitHub



📄 License

This project is licensed under the MIT License.

Feel free to fork, use, or contribute!
