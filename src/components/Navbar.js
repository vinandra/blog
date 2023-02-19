import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>my blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New blogs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
