const API_URL = import.meta.env.VITE_BACKENDURL || 'http://localhost:3000';

export const fetchAPI = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = `Error ${response.status}: ${response.statusText}`;
            try {
                const errorJson = JSON.parse(errorText);
                errorMessage = errorJson.message || errorMessage;
            } catch (e) {
                // use raw text or default message
                if (errorText) errorMessage = errorText;
            }
            throw new Error(errorMessage);
        }

        return await response.json();
    } catch (error) {
        console.error(`API Error on ${API_URL}${endpoint}:`, error);
        throw error;
    }
};
