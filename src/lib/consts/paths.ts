export const Paths = {
    login: '/login',
    logout: '/login/?logout',
    dashboard: {
        index: '/dashboard',
        cameras: {
            index: '/dashboard/cameras',
            view: '/dashboard/cameras/:1',
        },
        system: '/dashboard/system',
    }
}

export function routeBuilder(path: string, params: string | string[]): string {
    let route = path;
    if(Array.isArray(params)) {
        params.forEach((param, index) => {
            route = route.replace(`:${index}`, param);
        });
    } else {
        route = route.replace(':id', params);
    }
    return route;
}