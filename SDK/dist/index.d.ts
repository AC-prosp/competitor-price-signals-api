export type EventType = "price_drop" | "price_increase" | "back_in_stock" | "out_of_stock";
interface SubscribeParams {
    url: string;
    events: EventType[];
    webhook_url?: string;
}
interface RecordParams {
    monitor_id: string;
    event: EventType;
}
export declare class Webintel {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string);
    private request;
    subscribe(params: SubscribeParams): Promise<any>;
    list(): Promise<any>;
    delete(id: string): Promise<any>;
    record(params: RecordParams): Promise<any>;
    static generateKey(email: string): Promise<{
        api_key: string;
        plan: string;
    }>;
}
export {};
