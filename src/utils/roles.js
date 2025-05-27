// src/utils/roles.js
export const currentUser = {
  username: "admin",
  role: "admin" // o "usuario"
};

export const isAdmin = () => currentUser.role === "admin";