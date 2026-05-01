export type EventType =
  | "price_drop"
  | "price_increase"
  | "back_in_stock"
  | "out_of_stock";

interface SubscribeParams {
  url: string;
  events: EventType[];
  webhook_url?: string;
}

interface RecordParams {
  monitor_id: string;
  event: EventType;
}

export class Webintel {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("API key is required");
    }
    this.apiKey = apiKey;
    this.baseUrl = "https://api.webintel.io/v1";
  }

  private async request(path: string, options: RequestInit = {}) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Webintel API error (${res.status}): ${text}`);
    }
    return res.json();
  }

  async subscribe(params: SubscribeParams) {
    return this.request("/signals/subscribe", {
      method: "POST",
      body: JSON.stringify(params),
    });
  }

  async list() {
    return this.request("/signals", {
      method: "GET",
    });
  }

  async delete(id: string) {
    return this.request(`/signals/${id}`, {
      method: "DELETE",
    });
  }

  async record(params: RecordParams) {
    return this.request("/signals/record", {
      method: "POST",
      body: JSON.stringify(params),
    });
  }

  static async generateKey(email: string): Promise<{ api_key: string; plan: string }> {
    const res = await fetch("https://api.webintel.io/v1/keys/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Webintel API error (${res.status}): ${text}`);
    }
    return res.json();
  }
}