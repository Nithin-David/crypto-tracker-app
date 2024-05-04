import axios from "axios";

export const get100Coins = () => {
   const options = {
     method: "GET",
     headers: {
       accept: "application/json",
       "x-cg-demo-api-key": `${process.env.REACT_APP_API_KEY}`,
     },
   };

   const coins = axios
     .get(
       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1",
       options
     )
     .then((response) => {
       console.log("RESPONSE>>>", response.data);
       return response.data;
     })
     .catch((error) => {
       console.log("ERROR>>>", error.message);
     });

  return coins;
};
