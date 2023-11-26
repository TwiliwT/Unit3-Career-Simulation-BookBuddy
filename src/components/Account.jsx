import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../API";

export default function Account({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const nextUser = await getUser(token);
        setUser(nextUser);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  return token ? (
    user && (
      <div>
        <h2>
          {user.firstname} {user.lastname} - ({user.email})
        </h2>
      </div>
    )
  ) : (
    <Link to="/Login">Please login before viewing this page.</Link>
  );
}
