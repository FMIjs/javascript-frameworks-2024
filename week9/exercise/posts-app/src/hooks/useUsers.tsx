import { useEffect, useState } from "react";

import { User } from "../interfaces";
import { API_URL } from "../constants";

export const useUsers = (
  selectedUserId?: number | null
) => {
  console.log('useUsers', selectedUserId)

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    console.log('fetching users...');
    fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    console.log('clear', selectedUserId, selectedUser);
    const shouldClearUser =
      (!selectedUserId && !!selectedUser) ||
      (selectedUserId && selectedUser && selectedUserId !== selectedUser.id);
    if (!shouldClearUser) return;

    console.log('clearing selected user...');
    setSelectedUser(null);
  }, [selectedUser, selectedUserId]);

  useEffect(() => {
    console.log('set', selectedUserId, selectedUser);
    const shouldFetchUser = selectedUserId && !selectedUser;
    if (!shouldFetchUser) return;

    console.log('fetching selected user...');
    fetch(`${API_URL}/users/${selectedUserId}`)
      .then(response => response.json())
      .then((user: User) => {
        setSelectedUser(user || null);
      });
  }, [selectedUser, selectedUserId]);

  return {
    users,
    selectedUser
  };
}