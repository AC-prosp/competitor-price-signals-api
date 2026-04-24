"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webintel = void 0;
class Webintel {
    constructor(apiKey) {
        if (!apiKey) {
            throw new Error("API key is required");
        }
        this.apiKey = apiKey;
        this.baseUrl = "https://api.webintel.io/v1";
    }
    async request(path, options = {}) {
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
    async subscribe(params) {
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
    async delete(id) {
        return this.request(`/signals/${id}`, {
            method: "DELETE",
        });
    }
}
exports.Webintel = Webintel;
