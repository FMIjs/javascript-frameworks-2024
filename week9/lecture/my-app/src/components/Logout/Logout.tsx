import IsAuthenticated from "../../hocs/is-authenticated";

const Logout = ({ logout }: { logout: () => void }) => {
  return (
    <div>
      <button type="button" onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default IsAuthenticated(Logout, false);