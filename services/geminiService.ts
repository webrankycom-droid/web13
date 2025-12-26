
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Always use the process.env.API_KEY string directly as per SDK guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getAiResponse(userMessage: string) {
    try {
      // Use ai.models.generateContent directly to query with both model name and prompt
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are an expert financial assistant for CardVCC.com. You help users understand virtual credit cards (VCCs), privacy, security, and how to use our platform. Keep responses concise and professional. Do not provide actual financial advice, only platform information.",
          temperature: 0.7,
        },
      });
      // Accessing the .text property directly from GenerateContentResponse
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having trouble connecting right now. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
