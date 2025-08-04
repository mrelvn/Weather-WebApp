export default async function handler(req, res) {
    const apiKey = process.env.WEATHER_API_KEY; 
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch weather" });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
