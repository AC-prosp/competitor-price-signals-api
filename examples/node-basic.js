const Webintel = require("@acpro/webintel");

const client = new Webintel("YOUR_API_KEY");

async function run() {
    try {
        const monitor = await client.subscribe({
            url: "https://example.com/product",
            events: ["price_drop", "back_in_stock"]
        });

        console.log("Monitor created:", monitor);
    } catch (error) {
        console.error("Error creating monitor:", error.message);
    }
}

run();