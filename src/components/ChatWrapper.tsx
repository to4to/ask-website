"use client";

import { useChat } from "ai/react";

export const ChatWrapper = ({ sessionID }: { sessionID: string }) => {
  const {} = useChat({
      api: "/api/chat-stream",
      body:{sessionID}
  });
    
    
    
    
    return (
        <div className="relative bg-zinc-50 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
        </div>
    )
};
