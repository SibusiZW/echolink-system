'use server';

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

export default async function generateResponse(text: string) {
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Optimize the following announcement/emergency message: ${text}`,
        config: {
            systemInstruction: "Your job is to generate a meaningful and long redo of an announcement/emergency message given by the user. Don't add any other info you are not given by the user. Use good and simple english which is readable and understandable for different users"
        }  
    })

    if (response.text) {
        return response.text
    } else {
        return "Error. Check API Key"
    }
}