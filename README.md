# 🧠 Mission Control: Multi-Agent AI Strategist

Mission Control is a real-time multi-agent AI system that breaks down complex user prompts and orchestrates collaborative agents to deliver a launch-ready strategy — complete with visual traces, live chat, and strategic insights.

Built for AppyPie’s AI Hackathon 2025 🚀

---

## 🔍 Features

- 🧠 **Multi-Agent Collaboration**: Strategy, Marketing, Logistics, and Finance agents work in sync
- ⚡ **Real-Time Socket Communication**: Instant thinking and streaming trace updates
- 🗺️ **Agent Trace Visualizer**: Dynamic agent graph showing decision flow
- 🧑‍💻 **Interactive Chat UI**: Chat-style interface with context-aware responses
- 📄 **Markdown Summary**: Cleanly formatted strategy rendered in readable sections
- 🧩 **Plug & Play Architecture**: Modular backend (FastAPI) and frontend (React + Tailwind + NextUI)

---

## 🏗️ Architecture

```
Frontend (React + Tailwind)
         ⬇ Socket.IO
Relay Server (Node.js + Express)
         ⬇ REST API
Backend (FastAPI + LangChain + Agents)
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/fekusharma111/agentGPT.git
cd mission-control-ai
```

### 2. Start the Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Start the Relay Server
```bash
cd relay-server
npm install
node index.js
```

### 4. Start the Frontend
```bash
cd frontend
npm install
npm start
```

---

## 📸 Demo Preview

![UI Preview](./demo/screenshot-ui.png)

---

## 📂 Project Structure

```
mission-control-ai/
├── backend/         # FastAPI + LangChain Agents
├── relay-server/    # Node.js Socket.IO Server
├── frontend/        # React + Tailwind UI
```

---

## 🧩 Agents Overview

- **Strategy Agent**: Generates high-level plan based on the user prompt
- **Marketing Agent**: Crafts go-to-market strategy
- **Logistics Agent**: Handles feasibility and distribution flow
- **Finance Agent**: Evaluates pricing and business model

---

## 🔐 Environment Variables

### `backend/.env`
```
OPENAI_API_KEY=your_openai_key_here
```

### `relay-server/.env` *(optional)*

---

## 🧠 Powered By

- [FastAPI](https://fastapi.tiangolo.com/)
- [LangChain](https://www.langchain.com/)
- [Socket.IO](https://socket.io/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextUI](https://nextui.org/)

---

## 📜 License

MIT License. Free to fork, remix, or extend. Give credit where it's due 🙌

---

## 👨‍🚀 Made with 💙 by Feku Sharma