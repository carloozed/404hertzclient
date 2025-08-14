import { AnalyzeResponse } from '../types/analyze';

export const analyze = async (url: string): Promise<AnalyzeResponse> => {
  try {
    const authToken = localStorage.getItem('authToken');

    const encodedUrl = encodeURIComponent(url);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/set/${encodedUrl}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
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
