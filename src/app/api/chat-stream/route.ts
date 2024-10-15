import { NextRequest } from "next/server";

export const POST = async (req:NextRequest) => {
    const {messages,sessionId} =await req.json
}