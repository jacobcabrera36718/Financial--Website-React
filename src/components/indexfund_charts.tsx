import React, { useEffect, useMemo, useState } from 'react'
import {fetchStockData, formatStockData, candleStickOptions} from '../utils/fetch_indexfund';
import ReactApexChart from 'react-apexcharts'

const LiveChart = ({ symbol }) => {
    const [stockData, setStockData] = useState({})

    useEffect(() => {
        fetchStockData(symbol).then(data =>
            setStockData(data)
        )
    }, [])

    const seriesData = useMemo(() => formatStockData(stockData), [stockData])

    return (
        <ReactApexChart
            series={
                [
                    {
                        data: seriesData
                    }
                ]
            }
            options={candleStickOptions}
            type="candlestick"
        />
    )
}

export default LiveChart