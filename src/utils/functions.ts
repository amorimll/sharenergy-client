export const getSessionToken = () => {
  const sessionToken = sessionStorage.getItem("token");
  return sessionToken;
};
