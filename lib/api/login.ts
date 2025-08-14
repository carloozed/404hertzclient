import { LoginRequest, LoginResponse } from '../types/login';

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        } as LoginRequest),
      }
    );
    console.log(
      'API URL:',
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login/`
    );

    if (!response.ok) {
      // Get the actual error details from the server
      const errorData = await response.text();
      console.error('Server response:', errorData);
      console.error('Status:', response.status);
      console.error('Headers:', Object.fromEntries(response.headers.entries()));

      throw new Error(`Login failed: ${response.status} - ${errorData}`);
    }

    const data: LoginResponse = await response.json();
    localStorage.setItem('authToken', data.access_token);
    console.log('asdfadfasdf', data, data.access_token);
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
