import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DribbbleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      // Get the authorization code from URL
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          // Exchange the code for an access token
          const response = await fetch('https://dribbble.com/oauth/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              client_id: process.env.REACT_APP_DRIBBBLE_CLIENT_ID,
              client_secret: process.env.REACT_APP_DRIBBBLE_CLIENT_SECRET,
              code: code,
              redirect_uri: 'http://localhost:3000/auth/dribbble/callback',
            }),
          });

          const data = await response.json();
          
          if (data.access_token) {
            // Store the access token
            localStorage.setItem('dribbbleToken', data.access_token);
            // Redirect back to home page
            navigate('/');
          } else {
            console.error('Failed to get access token');
            navigate('/');
          }
        } catch (error) {
          console.error('Error in OAuth callback:', error);
          navigate('/');
        }
      } else {
        navigate('/');
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Authenticating with Dribbble...</p>
      </div>
    </div>
  );
}

export default DribbbleCallback; 