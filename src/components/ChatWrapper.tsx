"use client";

import { useChat } from "ai/react";
import { json } from "stream/consumers";

export const ChatWrapper = ({ sessionID }: { sessionID: string }) => {
  const { messages, handleInputChange, input,handleSubmit } = useChat({
    api: "/api/chat-stream",
    body: { sessionID },
  });

  return (
    <div className="relative bg-zinc-50 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        {/* {JSON.stringify(messages)} */}

        <Messages messages={messages}/>
      </div>

      <form onSubmit={handleSubmit}>
        
        <input className="text-black" onChange={handleInputChange} value={input} type="text" />

        <button type="submit">Send </button>
      </form>
    </div>
  );
};
