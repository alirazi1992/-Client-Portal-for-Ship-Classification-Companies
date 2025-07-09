// src/context/AuthProvider.jsx
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fake = localStorage.getItem('fake-user');
      if (fake) {
        const parsed = JSON.parse(fake);
        setUser({ email: parsed.email });
        setUserRole(parsed.role || 'admin');
      }
    } catch (err) {
      console.error('❌ Error parsing fake-user:', err);
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem('fake-user');
    setUser(null);
    setUserRole('');
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ user, userRole, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
