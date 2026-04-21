// Flow:
// 1. Webintel detects price change
// 2. Sends webhook
// 3. AI decides what to do
// 4. You execute action





// Example: Using Webintel with an AI agent (OpenAI) to react to competitor price changes

// Install:
// npm install express openai

const express = require("express");
const OpenAI = require("openai");

const app = express();
app.use(express.json());

// Initialise OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Webintel webhook endpoint
app.post("/webhook", async (req, res) => {
  const event = req.body;

  console.log("Received event:", event);

  // Only act on price drops
  if (event.event === "price_drop") {
    try {
      const prompt = `
A competitor just dropped their price.

Product URL: ${event.url}
Old price: ${event.old_price}
New price: ${event.new_price}

What should we do?

Respond with a short actionable recommendation.
`;

      const response = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: "You are an ecommerce pricing assistant." },
          { role: "user", content: prompt }
        ]
      });

      const decision = response.choices[0].message.content;

      console.log("AI decision:", decision);

      // Example action (replace with your logic)
      // e.g. update pricing, notify team, trigger workflow

    } catch (err) {
      console.error("AI error:", err);
    }
  }

  res.status(200).send("OK");
});

// Start server
app.listen(3000, () => {
  console.log("AI agent listening on http://localhost:3000");
});
