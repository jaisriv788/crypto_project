import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto'; // Make sure to install chart.js with npm

const BinanceFuturesChart = () => {
  const [tradingPairs, setTradingPairs] = useState([]);
  const [currentSymbol, setCurrentSymbol] = useState('BTCUSDT');
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    loadTradingPairs();
    fetchData('1d'); // Load default daily chart for BTCUSDT

    // Cleanup chart instance on component unmount
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const loadTradingPairs = async () => {
    try {
      const response = await fetch('https://fapi.binance.com/fapi/v1/exchangeInfo');
      const data = await response.json();
      const pairs = data.symbols.filter(symbol => symbol.contractType === 'PERPETUAL');
      setTradingPairs(pairs.map(symbol => symbol.symbol));
    } catch (error) {
      console.error('Error fetching trading pairs:', error);
    }
  };

  const updateSymbol = (event) => {
    setCurrentSymbol(event.target.value);
    fetchData('1d'); // Fetch default time frame when symbol changes
  };

  const fetchData = async (timeFrame) => {
    const endpoint = `https://fapi.binance.com/fapi/v1/klines?symbol=${currentSymbol}&interval=${timeFrame}`;
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const formattedData = formatChartData(data);
      updateChart(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const formatChartData = (data) => {
    return data.map(item => ({
      time: new Date(item[0]),
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4])
    }));
  };

  const updateChart = (chartData) => {
    const labels = chartData.map(candle => candle.time.toLocaleString());
    const chartDataset = {
      labels: labels,
      datasets: [{
        label: currentSymbol,
        data: chartData.map(candle => ({
          x: candle.time,
          y: [candle.open, candle.high, candle.low, candle.close]
        })),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'candlestick', // Use candlestick chart type
      data: chartDataset,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'minute'
            }
          }
        }
      }
    });

    setChartInstance(newChartInstance);
  };

  return (
    <div className='mt-3 ml-2 flex flex-col gap-2'>
      <h1 className='font-bold text-3xl'>Binance Futures Chart</h1>

      {/* Symbol Selector (Dropdown) */}
      <div>
        <label htmlFor="symbolSelect">Select Trading Pair:</label>
        <select className='border-2 border-black rounded-md px-2 ml-2' id="symbolSelect" onChange={updateSymbol}>
          {tradingPairs.map(pair => (
            <option key={pair} value={pair}>{pair}</option>
          ))}
        </select>
      </div>

      {/* Time Frame Buttons */}
      <div className='flex gap-2'>
        {['1min', '3min', '5min', '15min', '30min', '1hour', '2hour', '4hour', '8hour', '12hour', '1day', '2day', '1week', '1month'].map(timeFrame => (
          <button key={timeFrame} className='border px-2 bg-gray-200' onClick={() => fetchData(timeFrame)}>{timeFrame}</button>
        ))}
      </div>

      {/* Canvas for Chart.js */}
      <canvas className='border' ref={chartRef} width="800" height="400"></canvas>
    </div>
  );
};

export default BinanceFuturesChart;
