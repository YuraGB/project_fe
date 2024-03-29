export const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("token");
};

export const setTokenToLocalStorage = (token: string): void => {
  localStorage.setItem("token", token);
};
