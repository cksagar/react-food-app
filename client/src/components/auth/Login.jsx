import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetailsContext } from "../../utils/UserDetailsContext";
import AuthService from "./service/auth.service"; // ✅ import your AuthService

const LoginPage = () => {
  const { setUserName } = useContext(UserDetailsContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      // ✅ Call login from AuthService
      const data = await AuthService.login(username, password);

      // ✅ Assuming response: { message: "...", data: { email, id } }
      setUserName(data.data); // update context
      navigate("/home");
    } catch (err) {
      console.error("Login failed", err);
      setError(err?.response?.data?.message || err.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="text"
            placeholder="Email"
            className="border p-2 mb-3 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 mb-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
