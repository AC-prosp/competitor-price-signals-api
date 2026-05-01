# webintel

Real-time price and stock change detection — delivered as clean events.

Built for developers and AI agents.

## Install

```bash
npm install webintel
```

## Quick start

```javascript
const { Webintel } = require("webintel");

const client = new Webintel("YOUR_API_KEY");

// Subscribe to price changes
await client.subscribe({
  url: "https://example.com/product",
  events: ["price_drop", "back_in_stock"],
  webhook_url: "https://yourapp.com/webhook"
});

// List your monitors
const monitors = await client.list();

// Record a signal
await client.record({
  monitor_id: "monitor_123",
  event: "price_drop"
});
```

## Get an API key

```javascript
const { Webintel } = require("webintel");

const { api_key } = await Webintel.generateKey("you@example.com");
console.log(api_key); // wi_xxxxxxxxxxxxxxxxx
```

## Events

- `price_drop`
- `price_increase`
- `back_in_stock`
- `out_of_stock`

## API

Base URL: `https://api.webintel.io/v1`

All requests require: `Authorization: Bearer YOUR_API_KEY`

## Links

- [webintel.io](https://webintel.io)