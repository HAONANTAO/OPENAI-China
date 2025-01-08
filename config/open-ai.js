import { Configuration } from "openai";
import dotenv from "dotenv";

dotenv.config();

export const configOpenAI = () => {
  const apiKey = process.env.OPENAI_GUONEI_KEY;
  const URL = process.env.OPENAI_GUONEI_BASE_URL;
  const config = new Configuration({
    apiKey,
    basePath: URL,
  });
  return config;
};
