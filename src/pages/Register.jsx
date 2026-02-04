import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData
    };

    register(newUser);
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">User (Customer)</option>
          <option value="vendor">Vendor (Seller)</option>
        </select>

        <button onClick={handleRegister}>Register</button>

        <p className="text-center mt-10">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
