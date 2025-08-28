import { useUserStore } from '../../stores/UserStore';

export const logout = async (): Promise<void> => {
  try {
    const token = localStorage.getItem('authToken');

    if (token) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        console.warn('Logout request failed, but clearing token anyway');
      }
    }

    localStorage.removeItem('authToken');
    useUserStore.getState().logout();
  } catch (error) {
    console.error('Logout error:', error);
    localStorage.removeItem('authToken');
  }
};
