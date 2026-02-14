import { Message } from "../types";

export const chatWithAssistant = async (messages: Message[]) => {
  try {
    const response = await fetch("http://84.32.84.32:9090/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.text(); 
    return data;

  } catch (error) {
    console.error("Chat API Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};
