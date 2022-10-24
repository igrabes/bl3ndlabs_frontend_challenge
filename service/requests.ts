import axios from "axios";

const API_KEY = "10228021595625744";
const BASE_URL = `https://www.superheroapi.com/api.php/${API_KEY}/`;

const fetchSuperheroesByName = async (name: string) => {
  const response = await axios.get(`${BASE_URL}search/${name}`);
  return response.data.results || [];
};

export { fetchSuperheroesByName };
