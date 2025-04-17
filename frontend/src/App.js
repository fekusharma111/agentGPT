import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import AgentGraph from "./components/AgentGraph";
import FinalOutput from "./components/FinalOutput";
import InputBox from "./components/InputBox.jsx";
import SampleCard from "./components/SampleCard.jsx";
import ReactMarkdown from "react-markdown";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([]);
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = () => {
    if (!input.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    // Reset + update states
    setLogs([]);
    setSummary("");
    setStatus("🤖 Thinking...");
    setError("");
    setIsLoading(true);
    setConversationStarted(true);

    setChatHistory((prev) => [...prev, { from: "user", message: input }]);

    socket.emit("userPrompt", input);
    setInput(""); // clear input
  };

  useEffect(() => {
    socket.on("status", (msg) => setStatus(msg));

    socket.on("agentMessage", (log) => {
      setLogs((prev) => [...prev, log]);
      setChatHistory((prev) => [...prev, { from: log.agent, message: log.message }]);
    });

    socket.on("finalSummary", (result) => {
      setSummary(result);
      setStatus("✅ Done!");
      setIsLoading(false);
      setChatHistory((prev) => [...prev, { from: "AI", message: result }]);
    });

    socket.on("error", (errMsg) => {
      setStatus("");
      setError(errMsg || "Something went wrong.");
      setIsLoading(false);
    });

    return () => {
      socket.off("status");
      socket.off("agentMessage");
      socket.off("finalSummary");
      socket.off("error");
    };
  }, []);

  return (
    <div className="App">
      <div className="containernew">
        {!conversationStarted && <h2 className="app-title">🧠 Mission Control: Multi-Agent AI Strategist</h2>}
        <InputBox input={input} setInput={setInput} handleSubmit={handleSubmit} conversationStarted={conversationStarted} isLoading={isLoading} />
        {!conversationStarted && <SampleCard setInput={setInput} />}

        {conversationStarted && (
          <div className="chat-area">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.from === "user" ? "user-msg" : "ai-msg"}`}>
                {/* {msg.message} */}
                <ReactMarkdown>{msg.message}</ReactMarkdown>
              </div>
            ))}
            {isLoading && <div className="chat-bubble ai-msg">🤖 Thinking...</div>}
          </div>
        )}

        {error && <p className="error-msg">❌ {error}</p>}
      </div>

      {/* <div className="input-area-fixed"> */}
      {/* {conversationStarted&&<InputBox input={input} setInput={setInput} handleSubmit={handleSubmit} />} */}
      {/* </div> */}

      
    </div>
  );
}

export default App;
