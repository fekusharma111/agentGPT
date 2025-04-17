import React from "react";
import "./FinalOutput.css";

const FinalOutput = ({ summary }) => {
  return (
    <div className="final-container">
      <h2 className="section-title">🚀 Launch Plan Summary</h2>
      <div className="card-block">
        <div dangerouslySetInnerHTML={{ __html: summary.replace(/\n/g, "<br />") }} />
      </div>
    </div>
  );
};

export default FinalOutput;
