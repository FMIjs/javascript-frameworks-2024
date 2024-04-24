import { useNavigate } from 'react-router-dom';
import { User } from '../../interfaces';
import styles from './UserList.module.css';
import { useCallback } from 'react';

interface UserListProps {
  users: User[]
}
export const UserList = (props: UserListProps) => {
  const { users } = props;


  const navigate = useNavigate();
  const selectUser = useCallback((userId: number) => {
    navigate(`/users/${userId}`);
  }, [navigate])

  return <div className={styles.container}>
    {users.map(user => <div key={user.id} onClick={() => selectUser(user.id)}>{user.name}</div>)}
  </div>;
};
