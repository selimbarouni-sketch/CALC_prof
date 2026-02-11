import { GoogleGenAI } from "@google/genai";

declare var process: { env: { API_KEY: string } };

export const analyzeGrades = async (grades: number[]): Promise<string> => {
  if (grades.length === 0) return "Aucune donnée.";
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const sum = grades.reduce((a, b) => a + b, 0);
  const avg = sum / grades.length;
  
  const prompt = `Analyse brièvement ces points de barème d'un élève (Total: ${sum}, Moyenne par question: ${avg.toFixed(2)}). Points: ${grades.join(', ')}. Donne 2 points clés pédagogiques en français. Format Markdown court.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Erreur lors de l'analyse.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Service IA indisponible.";
  }
};