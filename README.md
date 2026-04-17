# Competitor Price Monitoring API

Track competitor price and product changes in real time and trigger automated actions.

Set up in under 60 seconds. No scraping setup required.

---

## What this does

Competitors change prices, stock, and products constantly. If you react too late, you lose revenue.

This API monitors product pages and detects meaningful changes such as:

- Price drops and increases  
- Stock availability changes  
- Product updates  

It returns structured data and can trigger webhooks so your systems can react instantly.

---

## Example response

    {
      "change_type": "price_drop",
      "product_name": "Running Shoes X",
      "old_price": 120,
      "new_price": 95,
      "percentage_change": 21,
      "ai_summary": "Price dropped significantly, likely a promotion",
      "timestamp": "2026-04-15T10:00:00Z"
    }

---

## Quick start

### 1. Create a monitor

POST /api/monitors

    {
      "url": "https://example.com/product",
      "type": "product",
      "check_interval_minutes": 10
    }

### 2. (Optional) Add a webhook

Receive updates automatically when a change is detected.

### 3. Get changes

GET /api/changes/latest

---

## Use cases

- Track competitor pricing  
- React instantly to price drops  
- Monitor stock availability  
- Automate pricing decisions  
- Power internal tools or AI agents  

---

## Example use case

Automatically react to competitor price changes:

1. Monitor a competitor product page  
2. Receive webhook when price changes  
3. Trigger pricing updates or alerts  

---

## How it works

1. Add a product URL  
2. The system extracts structured data  
3. Changes are detected and classified  
4. Results are returned via API or sent via webhook  

---

## Design goals

- Detect meaningful changes, not noise  
- Provide clean, structured data  
- Be easy to integrate  
- Enable automation, not just alerts  

---

## Limitations

- Accuracy depends on page structure  
- Some dynamic pages may be harder to parse  
- Detection improves over time  

---

## Try it

https://yourwebsite.com

---

## License

MIT

