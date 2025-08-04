export default async function handler(req, res) {
  const city = req.query.city;
  const API_KEY = "78afb45c81c660fb53428473251177bc";

  const url = https://api.openweathermap.org/data/2.5/weather?units=metric&q=

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
