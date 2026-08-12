# 🌤️ リアルタイム天気＆メモアプリ (Weather & Note App)

都市ごとの現在の天気をリアルタイムで確認し、その日の予定や服装などのメモを記録できる Web アプリケーションです。

React と Tailwind CSS で構築されており、将来的なバックエンド（FastAPI）との連携を見据えた設計になっています。

---

## 🚀 主な機能 (Features)

*   **リアルタイム天気表示**
    *   都市名（例: Tokyo, Osaka）を入力して検索
    *   現在の天気、気温、湿度、風速、天気アイコンの表示
    *   天候（晴れ・雨・雪など）に応じた背景デザインの動的切り替え
*   **お天気メモ機能**
    *   都市ごとのメモ作成・削除（「傘が必要」「厚手のコートを着る」など）
    *   ブラウザ（Local Storage）への自動保存
*   **レスポンシブデザイン**
    *   Tailwind CSS を使用した、PC・スマートフォン両対応のモダンな UI

---

## 🛠️ 使用技術 (Tech Stack)

### フロントエンド
*   **React** (JavaScript / CRA)
*   **Tailwind CSS** (スタイリング)
*   **Lucide React / Heroicons** (アイコン表示)

### 外部 API (天気データ)
*   **OpenWeatherMap API** (Current Weather Data)

---

## 📂 ディレクトリ構造 (Directory Structure)

```text
src/
├── components/          # 再利用可能なコンポーネント
│   ├── WeatherCard.js   # 天気情報表示カード
│   ├── SearchBar.js     # 都市検索バー
│   └── NoteSection.js   # メモ入力・一覧エリア
├── services/            # API通信モジュール
│   └── weatherApi.js    # OpenWeatherMap との通信処理
├── App.js               # メインコンポーネント
├── index.css            # Tailwind CSS の読み込み
└── index.js             # アプリの処理エントリーポイント
```
---

## 💡 開発を始める際のアドバイス

まずは **OpenWeatherMap** の無料アカウントを作成し、**API Key** を取得することから始めてみてください。

1. [OpenWeatherMap](https://openweathermap.org/) に無料登録して API Key を発行する
2. `.env` ファイルを作って API Key を設定する
3. `fetch` または `axios` を使って React から天気データを取得してみる

開発中に困ったことや、コンポーネントの書き方に迷ったら気軽にお知らせください！

ctrl shift p
Simple Browser: Show