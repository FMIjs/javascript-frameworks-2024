import { User } from '../../interfaces';
import styles from './UserDetail.module.css';

interface UserDetailProps {
  user: User | null,
  isLoading?: boolean
}
export const UserDetail = (props: UserDetailProps) => {
  const { user, isLoading } = props;

  return <div className={styles.container}>
    {user && <>{user.name}</>}
    {!user && !isLoading && <>No user selected</>}
    {!user && isLoading && <>Loading ...</>}
  </div>;
};
