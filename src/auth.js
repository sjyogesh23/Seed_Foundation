// auth.js

export const isAuthenticated = () => {
    const userData = localStorage.getItem('userData');
    return !!userData; // Check if userData exists in localStorage
  };
  
  export const login = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  
  export const logout = () => {
    localStorage.removeItem('userData');
  };
  