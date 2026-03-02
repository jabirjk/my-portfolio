import { GoogleGenAI } from "@google/genai";

export interface NewsHeadline {
  title: string;
  source: string;
  url: string;
}

export const fetchLatestNews = async (): Promise<NewsHeadline[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "What are the top 5 latest global news headlines right now? Provide the title, source name, and a URL for each.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              title: { type: "STRING" },
              source: { type: "STRING" },
              url: { type: "STRING" }
            },
            required: ["title", "source", "url"]
          }
        }
      },
    });

    const text = response.text;
    if (!text) throw new Error("No news found");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Failed to fetch latest news. Please try again later.");
  }
};
