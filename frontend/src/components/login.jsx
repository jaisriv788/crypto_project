import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Store the token in local storage
        navigate("/") // Redirect on successful login
      } else {
        setMessage(data.message || "Login failed. Please try again."); // Display error message
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again."); // Display a generic error message
    }
  };

  return (
    <div className="mt-5 ml-3">
      <div className="flex flex-col gap-3">
        {" "}
        <h1 className="font-bold text-3xl">Login</h1>
        <form
          className="flex flex-col gap-2"
          id="login-form"
          onSubmit={handleSubmit}
        >
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
            <button className="border px-2 bg-gray-200" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>

      <p className="text-sm mt-3">
        Don't have an account?{" "}
        <a className="text-purple-800 underline" href="/register">
          Register
        </a>
      </p>

      <p id="message">{message}</p>
    </div>
  );
};

export default Login;
