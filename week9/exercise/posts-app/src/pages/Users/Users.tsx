import { useParams } from "react-router-dom";
import { UserDetail, UserList } from "../../components";
import { useUsers } from "../../hooks/useUsers";
import styles from './Users.module.css';

export const Users = () => {
  const { userId } = useParams();

  const { users, selectedUser } = useUsers(userId ? +userId : null);

  return (
    <div className={styles.container}>
      <UserList users={users} />
      {userId && <UserDetail
        user={selectedUser}
        isLoading={!selectedUser} />
      }
    </div>
  );
};

