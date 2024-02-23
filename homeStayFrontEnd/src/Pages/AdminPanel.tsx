import { getAuthToken } from "../assets/token";

function AdminPanel() {
  return (
    <>
      <h1>Admin</h1>
      <h1>{getAuthToken()}</h1>
    </>
  );
}
export default AdminPanel;
