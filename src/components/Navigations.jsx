/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";
import "../CSS/Navigation.css";
import bookLogo from "../assets/books.png";

export default function Navigation({ token, user }) {
  console.log(token);
  function renderElement() {
    if (token && user) {
      return <Link to="/Account">Account</Link>;
    } else {
      <>
        <Link to="/Login">Login</Link>
        <Link to="Register">Register</Link>
      </>;
    }
  }
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
