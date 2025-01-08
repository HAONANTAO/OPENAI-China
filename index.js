import { configOpenAI } from "./config/open-ai.js";
import { OpenAIApi } from "openai";

const main = async () => {
  try {
    const config = configOpenAI();
    const openai = new OpenAIApi(config);

    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "talk about The Great Wall in 20 words",
        },
      ],
    });
    const content = chatResponse.data.choices[0].message.content;
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

main();
