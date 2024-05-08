import { Link } from "react-router-dom";
import { PageRoute } from "../../interfaces"

import styles from './NavBar.module.css';

interface NavBarProps {
  pageRoutes: PageRoute[];
}
export const NavBar = (props: NavBarProps) => {
  const { pageRoutes } = props;
  return <nav>
    {pageRoutes.map((pageRoutes, idx) => (
      <Link className={styles.navigation} key={idx} to={pageRoutes.path}>
        {pageRoutes.title}
      </Link>
    ))}
  </nav>
}
