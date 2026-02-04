import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h3>E-Commerce</h3>

      <div style={styles.links}>
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {user?.role === "user" && (
          <>
            <Link to="/user">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/orders">Orders</Link>
          </>
        )}

        {user?.role === "vendor" && (
          <>
            <Link to="/vendor">Dashboard</Link>
          </>
        )}

        {user && (
          <>
            <span style={styles.user}>
              {user.name} ({user.role})
            </span>
            <button onClick={handleLogout} style={styles.logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "#fff"
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },
  logout: {
    cursor: "pointer",
    padding: "5px 10px"
  },
  user: {
    fontSize: "14px",
    opacity: 0.8
  }
};
