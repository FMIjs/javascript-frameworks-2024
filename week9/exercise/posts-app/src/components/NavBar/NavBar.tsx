import { Link } from "react-router-dom";
import { PageRoute } from "../../interfaces"


interface NavBarProps {
  pageRoutes: PageRoute[];
}
export const NavBar = (props: NavBarProps) => {
  const { pageRoutes } = props;
  return <nav>
    {pageRoutes.map((pageRoutes, idx) => (
      <Link key={idx} to={pageRoutes.path}>
        {pageRoutes.title}
      </Link>
    ))}
  </nav>
}
