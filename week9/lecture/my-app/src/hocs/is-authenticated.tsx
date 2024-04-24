import { ComponentType, FC } from "react";


interface IsAuthenticatedProps {
  isAuthenticated: boolean;
}

const IsAuthenticated = <P extends object>(
  Component: FC<P> | ComponentType<P>,
  showNotAuthWarning: boolean = true
) => {
  const AuthenticatedComponent = (props: P & IsAuthenticatedProps) => {

    const { isAuthenticated } = props;

    // TODO
    // const redirectToLogin = useCallback(() => { }, []);

    // if (!isAuthenticated) return <div>Not authenticated</div>;
    if (!isAuthenticated) return showNotAuthWarning ? <div>Not authenticated</div> : null;
    return <Component {...props} />
  }

  return AuthenticatedComponent;
};

export default IsAuthenticated;