import React, { useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import "./InputBox.css";
import { getLaunchPlan } from "../api";

const InputBox = ({input, setInput ,handleSubmit ,conversationStarted,isLoading}) => {

  return (
    <div className="newcmd" style={{position:conversationStarted&&"absolute", bottom:conversationStarted&&"20px"}}>
      <div className="command-bar">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="dark col-span-12 md:col-span-6 mb-6 md:mb-0"
          placeholder="Enter your prompt"
          variant="flat"
        />
      </div>
      <div className="button-wrapper dark">
        <Button
          isIconOnly
          radius="full"
          className="w-11 h-11 bg-[#3a3a3a] text-white p-0 flex items-center justify-center"
          onPress={() => handleSubmit()}
        >
         { isLoading?"Loading":<svg fill="#fff" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
            <path d="M19.71,9.29l-7-7a1,1,0,0,0-1.42,0l-7,7a1,1,0,0,0,1.42,1.42L11,5.41V21a1,1,0,0,0,2,0V5.41l5.29,5.3a1,1,0,0,0,1.42,0Z" />
          </svg>}
        </Button>
      </div>
      
    </div>
  );
};

export default InputBox;
