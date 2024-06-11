import axios from "axios";

export const getPosition = async () => {
  const response = await axios.get(
    "https://api.thingspeak.com/channels/2572994/feeds.json?api_key=3S2EWBFN8VX7MXZ2"
  );
  return await response.data
};
