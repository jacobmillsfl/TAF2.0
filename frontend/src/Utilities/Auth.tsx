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
        return this.getAuthToken() != null;
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