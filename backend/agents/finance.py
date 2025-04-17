from langchain_openai import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
from dotenv import load_dotenv
import os

load_dotenv()
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)

def finance_agent(strategy_output: str):
    messages = [
        SystemMessage(content="You are a financial planner for early-stage startups."),
        HumanMessage(content=f"Based on this strategy: {strategy_output}\nCreate a basic budget plan. Suggest cost breakdown, funding sources, and monetization ideas.")
    ]
    response = llm(messages)
    return response.content
