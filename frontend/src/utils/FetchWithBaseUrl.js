const BASE_URL = "http://localhost:5000";

const fetchWithBaseUrl = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const defaultOptions = {
    credentials: "include",
    ...options,
  };  
  const response = await fetch(url, defaultOptions);

  return response;
};

export default fetchWithBaseUrl;
