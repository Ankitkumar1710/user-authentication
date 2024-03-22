import create from 'zustand';

export const useAuth = create((set) => ({
  isAuthenticated: !!localStorage.getItem('isAuthenticated'), // Retrieve from local storage
  user: JSON.parse(localStorage.getItem('user')) || {}, // Retrieve user from local storage
  signup: (name) => {
    localStorage.setItem('isAuthenticated', 'true'); // Store in local storage
    localStorage.setItem('user', JSON.stringify({ name })); // Store user in local storage
    set({ isAuthenticated: true, user: { name } });
  },
  login: (name) => {
    localStorage.setItem('isAuthenticated', 'true'); // Store in local storage
    localStorage.setItem('user', JSON.stringify({ name }));
    set({ isAuthenticated: true,  user: { name } });
  },
  logout: () => {
    localStorage.removeItem('isAuthenticated'); // Remove from local storage
    localStorage.removeItem('user'); // Remove user from local storage
    set({ isAuthenticated: false, user: {} });
  },
}));
