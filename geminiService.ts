
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDishRecommendation = async (userPreference: string): Promise<string> => {
  const model = 'gemini-3-flash-preview';
  
  const menuContext = MENU_ITEMS.map(item => 
    `${item.name} (${item.category}): ${item.description} - $${item.price}`
  ).join('\n');

  const systemInstruction = `
    You are a gourmet concierge for "L'Art Culinaire". 
    Recommend 1-2 dishes from our menu based on the user's preference.
    Keep the tone elegant, sophisticated, and concise.
    Menu items available:
    ${menuContext}
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPreference,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't find a specific recommendation. Our Truffle Burrata is always a crowd favorite!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our Chef recommends the Pan-Seared Sea Bass for an exquisite dining experience.";
  }
};
