import { ComponentType, FC } from "react";


interface IsAuthenticatedProps {
  isAuthenticated: boolean;
}
const IsUnauthenticated = <P extends object>(
  Component: FC<P> | ComponentType<P>
) => {
  const UnauthenticatedComponent = (props: P & IsAuthenticatedProps) => {
    const { isAuthenticated } = props;

    if (isAuthenticated) return null;
    return <Component {...props} />;
  }

  return UnauthenticatedComponent;
};

export default IsUnauthenticated;