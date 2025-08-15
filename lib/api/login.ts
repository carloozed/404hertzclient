import { LoginResponse, LoginRequest } from '../types/login';

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
      const errorData = await response.text();
      throw new Error(`Login failed: ${response.status} - ${errorData}`);
    }

    const data: LoginResponse = await response.json();
    localStorage.setItem('authToken', data.access_token);

    // Get user info immediately after login
    try {
      const userResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/me/`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${data.access_token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (userResponse.ok) {
        const userData = await userResponse.json();
        localStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (userError) {
      console.warn('Failed to fetch user data:', userError);
      // Don't throw here - login was successful
    }

    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
