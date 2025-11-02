import { AuthProvider } from "./context/AuthContext";
import AdminRouter from "./router/AdminRouter";

function App() {
  return (
    <AuthProvider>
      <AdminRouter />
    </AuthProvider>
  );
}

export default App;
