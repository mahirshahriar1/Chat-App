const BASE_URL = "https://chat-app-1-ioju.onrender.com";

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
