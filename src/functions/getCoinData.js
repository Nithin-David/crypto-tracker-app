import axios from "axios";

export const getCoinData = (id, setError) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": `${process.env.REACT_APP_API_KEY}`,
    },
  };

  const coin = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`, options)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return coin;
};
