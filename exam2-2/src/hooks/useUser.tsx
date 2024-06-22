import { useCallback, useEffect, useState } from "react";

import { User } from "../interfaces";
import { API_URL } from "../constants";

export const useUser = (userId: User['id']) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/users/${userId}`)
      .then(response => response.json())
      .then(setUser);
  }, [userId]);

  const clearSelectedUser = useCallback(() => {
    // ...
  }, []);

  return {
    user,
    clearSelectedUser
  };
}