import { AnalyzeRequest, AnalyzeResponse } from '../types/analyze';

export const analyze = async (url: string): Promise<AnalyzeResponse> => {
  try {
    // Get auth token from localStorage or wherever you store it
    const authToken = localStorage.getItem('authToken');

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/set/${url}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          url,
        } as AnalyzeRequest),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: AnalyzeResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Analysis error:', error);
    throw error;
  }
};
