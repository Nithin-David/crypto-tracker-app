import axios from "axios";

export const getPrices = (id, days, priceType, setError) => {

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": `${process.env.REACT_APP_API_KEY}`,
      },
    };

    const prices = axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        options
      )
      .then((response) => {
        if (response.data) {
          console.log("Prices>>>", response.data);
          if (priceType == "market_caps") {
            return response.data.market_caps;
          } else if (priceType == "total_volumes") {
            return response.data.total_volumes;
          } else {
            return response.data.prices;
          }
        }
      })
      .catch((e) => {
        console.log(e.message);
        if (setError) {
          setError(true);
        }
      });

  return prices;
};
