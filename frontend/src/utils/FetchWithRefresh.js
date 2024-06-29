const API_BASE_URL = "http://localhost:5000/api";

const fetchWithRefresh = async (url, options = {}) => {
  try {
    // Fetch a new access token using the refresh token
    const refreshResponse = await fetch(`${API_BASE_URL}/auth/refresh`, {
      credentials: "include",
    });

    if (!refreshResponse.ok) {
      throw new Error("Failed to refresh token");
    }
    const refreshData = await refreshResponse.json();
    const token = refreshData.accessToken;

    // Add Authorization header with the new token
    const authOptions = {
      ...options,
      headers: {
        ...options.headers,
        authorization: `Bearer ${token}`,
      },
    };

    // Fetch the resource with the new access token
    const response = await fetch(`${API_BASE_URL}${url}`, authOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch resource from ${url}`);
    }

    return response;
  } catch (error) {
    console.error(`Error fetching resource from ${url}:`, error.message);
    throw error;
  }
};

export default fetchWithRefresh;