import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated on the server
    axios
      .get('http://localhost:5000/users/checkAuth')
      .then(response => {
        const userData = response.data;
        setUser(userData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error checking authentication:', error);
        setLoading(false);
      });
  }, []);

  const login = (email, password) => {
    setLoading(true);
    return axios
      .post('http://localhost:5000/login', { email, password })
      .then(response => {
        const userData = response.data;
        setUser(userData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error logging in:', error);
        setLoading(false);
      });
  };

  const logout = () => {
    setLoading(true);
    return axios
      .post('/api/logout')
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error logging out:', error);
        setLoading(false);
      });
  };

  const authInfo = {
    user,
    loading,
    login: login,
    logout: logout
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
