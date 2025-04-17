import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";

const AgentGraph = ({ logs }) => {
    const emojiMap = {
        strategy: "🧠",
        marketing: "📢",
        logistics: "🛠️",
        finance: "💰",
      };
      
      const nodes = logs.map((log, idx) => ({
        id: log.agent,
        data: {
          label: `${emojiMap[log.agent] || ""} ${log.agent.toUpperCase()}\n\n${log.message.slice(0, 120)}...`,
        },
        position: { x: 200 * idx, y: 100 },
        style: {
          width: 250,
          background: "#fff",
          border: "1px solid #cbd5e1",
          borderRadius: "12px",
          fontSize: 14,
          padding: 10,
          whiteSpace: "pre-wrap",
        },
      }));

  const edges = logs.slice(1).map((log, idx) => ({
    id: `e${idx}`,
    source: logs[idx].agent,
    target: log.agent,
    animated: true,
    label: "→",
  }));

  return (
    <div style={{ height: 400 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default AgentGraph;
