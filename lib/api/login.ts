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

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data: LoginResponse = await response.json();

    localStorage.setItem('authToken', data.key);
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
