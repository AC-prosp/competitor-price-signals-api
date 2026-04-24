const Webintel = require("@acpro/webintel");

const client = new Webintel("YOUR_API_KEY");

client.subscribe({
  url: "https://example.com/product",
  events: ["price_drop"]
});