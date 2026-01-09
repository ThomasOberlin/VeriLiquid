
import { GoogleGenAI } from "@google/genai";

// Always use a named parameter and direct process.env.API_KEY without fallback
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getMarketInsight(query: string) {
  try {
    // Call generateContent with model name and prompt directly
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        // Use systemInstruction for role definition and behavior guidance
        systemInstruction: `You are a financial advisor for "VeriLiquid", a tokenization platform. 
      Answer professionally, emphasizing the benefits of asset tokenization, yield-bearing tokens, and the security of RWA (Real World Assets). 
      Keep it concise and EU-market focused.`,
        temperature: 0.7,
      }
    });
    // Access response.text as a property (not a method)
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble accessing market data right now. Please try again later.";
  }
}
