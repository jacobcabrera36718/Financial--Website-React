
const symbol = ['SPY']

export const fetchStockData = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${'QEX7BUV19R2OFSFF'}`)
    const data = await response.json()
    return data
}

export const formatStockData = (stockData) => {

  const formattedData = []

  if (stockData['Weekly Adjusted Time Series']) {
      Object.entries(
          stockData['Weekly Adjusted Time Series']
      ).map(
          ([key, value]) => {
              formattedData.push({
                  x: key,
                  y: [
                      value['1. open'],
                      value['2. high'],
                      value['3. low'],
                      value['4. close'],
                  ]
              })
          }
      )
  }
  return formattedData
}

export const candleStickOptions = {
  chart: {
      type: "candlestick",
  },
  title: {
      text: "CandleStick Chart",
      align: "left",
  },
  xaxis: {
      type: "datetime",
  },
  yaxis: {
      tooltip: {
          enabled: true,
      },
  },
};