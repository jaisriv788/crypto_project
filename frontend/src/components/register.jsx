import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(" http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/login"); // Redirect to login page upon success
      } else {
        alert("Registration failed: " + data.message); // Show error message
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mt-5 ml-3">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Register</h1>

        <form className="flex flex-col gap-2" onSubmit={handleRegister}>
          <div>
            <label className="text-md" htmlFor="username">
              Username:
            </label>
            <input
              className="border ml-2"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-md" htmlFor="password">
              Password:
            </label>
            <input
              className="border ml-2"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            {" "}
            <button
              className="border px-2 bg-gray-200"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      <p className="text-sm mt-3">
        Already have an account?{" "}
        <a className="text-purple-800 underline" href="/login">
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;
