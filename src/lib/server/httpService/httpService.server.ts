//A server-only HTTP service, for use in loaders or action code

export class HttpService {
    
    constructor() {}

    public async get(url: string, headers?: any): Promise<Response> {
        return fetch(url, {
            method: 'GET',
            headers: headers ?? {
                'Content-Type': 'application/json'
            }
        });
    }

    public async post(url: string, data: any, headers?: any): Promise<Response> {
        return fetch(url, {
            method: 'POST',
            headers: headers ?? {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
}