interface ApiResponse {
    success?: boolean;
    message?: string;
}

const apiBaseUrl = String(
    import.meta.env.VITE_API_BASE_URL || "https://api.viprakha.com/"
).replace(/\/$/, '');

const readResponse = async (response: Response): Promise<ApiResponse> => {
    const text = await response.text();

    try {
        return text ? JSON.parse(text) : {};
    } catch {
        return { success: false, message: text || 'The server returned an invalid response.' };
    }
};

export const submitContactForm = async (payload: {
    name: string;
    email: string;
    phone: string;
    message: string;
}): Promise<string> => {
    const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    const result = await readResponse(response);

    if (!response.ok || !result.success) {
        throw new Error(result.message || 'Message could not be sent.');
    }

    return result.message || 'Your message has been sent successfully.';
};

export const submitCareerForm = async (payload: FormData): Promise<string> => {
    const response = await fetch(`${apiBaseUrl}/api/career-apply`, {
        method: 'POST',
        body: payload,
    });
    const result = await readResponse(response);

    if (!response.ok || !result.success) {
        throw new Error(result.message || 'Application could not be submitted.');
    }

    return result.message || 'Your application has been submitted successfully.';
};
