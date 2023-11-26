import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Login from "./components/Login";
import Account from "./components/Account";
import Register from "./components/Register";
import { getBooks } from "./API";

function App() {
  const [token, setToken] = useState(null);
  getBooks();

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Book Buddies
      </h1>
      <div>
        <Link to="/account">Account</Link>
      </div>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
        <Route path="/Account" element={<Account token={token} />} />
      </Routes>
    </>
  );
}

export default App;
