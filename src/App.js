import React, { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const city = 'Tokyo'; // 取得したい都市名

  // .envからAPIキーを読み込む
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    // 天気データを取得する関数
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ja&appid=${API_KEY}`
        );
        const data = await response.json();
        
        if (response.ok) {
          setWeather(data);
        } else {
          console.error("エラーが発生しました:", data.message);
        }
      } catch (error) {
        console.error("通信エラー:", error);
      }
    };

    if (API_KEY) {
      fetchWeather();
    }
  }, [API_KEY]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">リアルタイム天気</h1>

        {weather ? (
          <div>
            <h2 className="text-3xl font-extrabold text-blue-600">{weather.name}</h2>
            <p className="text-gray-500 capitalize">{weather.weather[0].description}</p>
            <div className="text-5xl font-black my-4 text-gray-800">
              {Math.round(weather.main.temp)}°C
            </div>
            <p className="text-sm text-gray-400">湿度: {weather.main.humidity}%</p>
          </div>
        ) : (
          <p className="text-gray-400">データを読み込み中...（またはAPIキーを確認してください）</p>
        )}
      </div>
    </div>
  );
}

export default App;
