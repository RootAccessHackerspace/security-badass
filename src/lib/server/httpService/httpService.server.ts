//A server-only HTTP service, for use in loaders or action code

export class HttpService {
    
    constructor() {}

    public async get(url: string): Promise<Response> {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    public async post(url: string, data: any): Promise<Response> {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}