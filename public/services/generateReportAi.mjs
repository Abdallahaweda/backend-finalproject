import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.GPT_KEY, // This is the default and can be omitted
});

async function HealthAiReportGenerator(userInfo, outputEx) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `
                generate a health program schedule like this ${JSON.stringify(
                  outputEx
                )} 
                and fill example with result data based on this user info ${JSON.stringify(
                  userInfo
                )} 
                and return that without any text out of  it  
      `,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  // const codeRegex = /```javascript(.*?)```/s;
  const extractedCode = chatCompletion.choices[0].message.content;

  const weakSchedulae = JSON.parse(extractedCode).weeklySchedule;

  return weakSchedulae;
}

export default HealthAiReportGenerator;
