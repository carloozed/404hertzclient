import { AnalyzeRequest, AnalyzeResponse } from '../types/analyze';

export const analyze = async (url: string): Promise<AnalyzeRequest> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/set/${url}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
        } as AnalyzeRequest),
      }
    );

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data: AnalyzeResponse = await response.json();

    localStorage.setItem('authToken', data.key);
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
