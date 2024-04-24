import IsUnauthenticated from "../../hocs/is-unauthenticated";

const Login = ({ login }: { login: () => void }) => {
  return (
    <div>
      <button type="button" onClick={() => login()}>Login</button>
    </div>
  );
}

export default IsUnauthenticated(Login);