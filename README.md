# Webintel

Real-time competitor price and stock change signals.

Know instantly when something important changes — without scraping, polling, or noise.

---

## What this is

Most tools either:

- give you raw scraped data  
- or alert you every time *anything* changes  

Neither is what you actually need.

Webintel focuses on one thing:

→ detecting **meaningful changes** (price drops, increases, stock changes)  
→ returning them as **clean, structured events**  
→ letting you **act on them instantly**

---

## Example output

    {
      "event": "price_drop",
      "product": "Running Shoes X",
      "old_price": 120,
      "new_price": 95,
      "change": -21,
      "timestamp": "2026-04-20T10:00:00Z"
    }

---

## Quick start

### 1. Create a monitor

POST /v1/signals/subscribe

    {
      "url": "https://example.com/product",
      "events": ["price_drop", "price_increase", "stock_change"],
      "webhook_url": "https://yourapp.com/webhook"
    }

---

### 2. Wait for events

When something changes, you receive:

    {
      "event": "price_drop",
      "url": "https://example.com/product",
      "old_price": 120,
      "new_price": 95,
      "timestamp": "2026-04-20T10:00:00Z"
    }

---

### 3. Do something with it

Typical flows:

- update your pricing  
- send an alert  
- trigger automation  
- feed into internal tools or AI workflows  

---

## Why this exists

Tracking competitor prices sounds simple.

In practice, it usually means:

- running scrapers on intervals  
- storing snapshots  
- comparing data manually  
- filtering noise  

Webintel removes that layer.

You don’t get raw data.

You get the **signal**.

---

## What makes it different

- No scraping setup  
- No polling or scheduling  
- No irrelevant changes  
- Structured events, not HTML or screenshots  
- Built for automation, not dashboards  

---

## Use cases

- Track competitor pricing automatically  
- Detect price drops instantly  
- Monitor stock availability  
- Power dynamic pricing systems  
- Feed clean signals into AI agents  

---

## Pricing

Free:
- 50 signals/month  

Usage:
- $0.003 per signal  

Pro:
- $19/month (includes 500 signals + lower rate)

1 signal = one meaningful change (price or stock)

You don’t pay for checks. Only for actual changes.

---

## Mental model

Instead of:

“Something on the page changed”

You get:

“Price dropped from £120 → £95”

---

## Status

Early-stage. Actively improving detection accuracy and reliability.

If something breaks or feels off, it probably is — and that feedback is useful.

---

## Try it

https://webintel.io

---

## Notes

- Works best on product pages with clear pricing  
- Some dynamic or heavily obfuscated sites may be less reliable  
- Detection improves over time  

---

## License

MIT
