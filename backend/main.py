from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from agents.strategy import strategy_agent
from agents.marketing import marketing_agent
from agents.logistics import logistics_agent
from agents.finance import finance_agent
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/launch")
async def launch(request: Request):
    data = await request.json()
    prompt = data.get("prompt")

    logs = []

    result_strategy = strategy_agent(prompt)
    logs.append({"agent": "Strategy", "message": result_strategy.strip()})

    result_marketing = marketing_agent(result_strategy)
    logs.append({"agent": "Marketing", "message": result_marketing.strip()})

    result_logistics = logistics_agent(result_strategy)
    logs.append({"agent": "Logistics", "message": result_logistics.strip()})

    result_finance = finance_agent(result_strategy)
    logs.append({"agent": "Finance", "message": result_finance.strip()})

    final_output = (
        "### 🚀 Strategy\n"
        f"{result_strategy.strip()}\n\n"
        "### 📢 Marketing\n"
        f"{result_marketing.strip()}\n\n"
        "### 🛠️ Logistics\n"
        f"{result_logistics.strip()}\n\n"
        "### 💰 Finance\n"
        f"{result_finance.strip()}"
    )

    return {
        "logs": logs,
        "summary": final_output
    }
