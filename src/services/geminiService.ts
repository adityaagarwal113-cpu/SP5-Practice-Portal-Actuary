import { GoogleGenAI } from "@google/genai";

const getGeminiKey = () => {
  return "AIzaSyCP8arGqyhSTi8I-JmR_btkQR4upx6cfnU";
};

export const getAiClient = () => {
  const key = getGeminiKey();
  if (!key) return null;
  return new GoogleGenAI({ apiKey: key });
};

export const generateSolution = async (question: string, term: string, marks: string) => {
  const ai = getAiClient();
  if (!ai) {
    throw new Error("AI Client not initialized. Please ensure GEMINI_API_KEY is configured.");
  }

  const prompt = `
    You are a top-tier Investment Specialist (SP5 level actuary).
    Provide a professional solution for the following SP5 exam question.
    
    Question: ${question}
    Exam Term: ${term}
    
    Requirements:
    1. Adhere strictly to IAI, IFoA, and ActEd SP5 "Core Reading" standards.
    2. Provide high-quality points with mark allocations (e.g., [1/2], [1]) for EVERY point.
    3. For a 10-mark question, provide at least 10 distinct points or 20 half-mark points.
    4. Structure the response into clear sections: "Key Analytical Principles", "Full Model Solution", and "Examiner's Perspective/ActEd Hints".
    5. Use standard actuarial terminology (e.g., "Basis Risk", "Liability Proxy", "Prudence", "Market Consistency").
    6. Total marks available for this question: ${marks || "as specified in question (usually 5 to 15 marks)"}.
    7. Format using professional Markdown with clear headings and bolded key terms.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "Failed to generate solution.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
