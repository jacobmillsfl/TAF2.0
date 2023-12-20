class Auth {
    private static instance: Auth | null = null;

    private constructor() {
        // Private constructor to prevent instantiation
    }

    static setAuthToken(token: string): void {
        localStorage.setItem('jwtToken', token);
    }

    static getAuthToken(): string | null {
        return localStorage.getItem('jwtToken');
    }

    static isAuthenticated(): boolean {
        const token = this.getAuthToken();
        return token !== null && token !== "";
    }

    static async registerUser(username: string, email: string, password: string): Promise<any> {
        const apiUrl = Auth.getAppUrl();
        if (apiUrl) {
            const response = await fetch(`${apiUrl}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password,
                })
            });
            const data = await (response.json() as Promise<any>);
            return data;
        } else {
            return "";
        }
    }

    static async login(username: string, password: string): Promise<any> {
        const apiUrl = Auth.getAppUrl();
        if (apiUrl) {
            const response = await fetch(`${apiUrl}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                })
            });
            const data = await (response.json() as Promise<any>);
            return data;
        } else {
            return "";
        }
    }

    // TODO: Centralize this part
    static getAppUrl(): string | undefined {
        if (!process.env.REACT_APP_API_URL) {
            alert("WARNING: The environment variable for REACT_APP_API_URL is not set. " +
                "Please run the command `source local.env` from the repo root, then restart the react app.");
            return;
        } else {
            console.log("API  URL", process.env.REACT_APP_API_URL);
            return process.env.REACT_APP_API_URL;
        }
    }

    // Singleton instance creation
    static getInstance(): Auth {
        if (!Auth.instance) {
            Auth.instance = new Auth();
        }
        return Auth.instance;
    }
}

export default Auth;