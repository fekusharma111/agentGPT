from langchain_openai import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
from dotenv import load_dotenv
import os

load_dotenv()
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)

def marketing_agent(strategy_output: str):
    messages = [
        SystemMessage(content="You are a marketing strategist for startups."),
        HumanMessage(content=f"Based on this strategy: {strategy_output}\nCreate a go-to-market plan. Include target audience, key marketing channels, and promotional ideas.")
    ]
    response = llm(messages)
    return response.content
