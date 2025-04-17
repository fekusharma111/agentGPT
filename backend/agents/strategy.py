from langchain_openai import ChatOpenAI

from langchain.schema import SystemMessage, HumanMessage
from dotenv import load_dotenv
import os

load_dotenv()
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)

def strategy_agent(user_prompt: str):
    messages = [
        SystemMessage(content="You are a strategic startup planner."),
        HumanMessage(content=f"Here is a startup idea: {user_prompt}\nBreak it down into key goals, user pain points, and core features.")
    ]
    response = llm(messages)
    return response.content
