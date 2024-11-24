import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="logo-text"
      style={{
        color: "white",
        fontSize: "20px",
        textDecoration: "none",
        fontWeight: "bold",
        fontFamily: "'Lobster', cursive",
      }}
    >
      League of Legends
    </Link>
  );
};

export default Logo;
