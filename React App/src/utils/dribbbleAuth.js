const getDribbbleAccessToken = async () => {
  // First check if we have a token in localStorage
  const storedToken = localStorage.getItem('dribbbleToken');
  if (storedToken) {
    return storedToken;
  }

  // If no stored token, redirect to Dribbble authorization
  const authUrl = `https://dribbble.com/oauth/authorize?client_id=${process.env.REACT_APP_DRIBBBLE_CLIENT_ID}&redirect_uri=http://localhost:3000/auth/dribbble/callback&scope=public`;
  window.location.href = authUrl;
  return null;
};

export default getDribbbleAccessToken; 