import { RAGChat, upstash } from "@upstash/rag-chat";

export const ragChat=new RAGChat({
    model:upstash()
})