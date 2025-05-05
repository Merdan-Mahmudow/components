import { useState, useEffect } from "react";

export function useAuth() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("authorized") === "true");
  const [phone, setPhone] = useState(localStorage.getItem("phone") || null);

  useEffect(() => {
    const handleStorage = () => {
      setIsLogged(localStorage.getItem("authorized") === "true");
      setPhone(localStorage.getItem("phone") || null);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return { 
    isLogged, 
    phone };
}
