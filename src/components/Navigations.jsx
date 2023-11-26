import { Link } from "react-router-dom";
import "../CSS/Navigation.css";
import bookLogo from "../assets/books.png";

export default function Navigation({ token, user }) {
  return (
    <header>
      <nav>
        <h1>
          <Link to="/">
            <img className="nav-logo" id="logo-image" src={bookLogo} />
            <span>Book Buddies</span>
          </Link>
        </h1>
        <div className="library-link-container">
          <Link to="/">Library</Link>
        </div>
        <div className="account-link-container">
          {token ? (
            user && <Link to="/Account">Account</Link>
          ) : (
            <>
              <Link to="/Login">Login</Link>
              <Link to="Register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
