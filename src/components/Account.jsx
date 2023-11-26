import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../API";
import { getBookReservations } from "../API";
import { deleteBookReservations } from "../API";

export default function Account({ token, user, setUser }) {
  const [reservedBooks, setReservedBooks] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const nextUser = await getUser(token);
        setUser(nextUser);
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchReservedBooks() {
      try {
        setReservedBooks(await getBookReservations(token));
        console.log(reservedBooks);
      } catch (error) {
        console.error(error);
      }
    }

    async function handleDelete(bookId) {
      await deleteBookReservations(token, bookId);
    }

    if (token) {
      fetchUser();
      fetchReservedBooks();
    }
  }, []);

  return token ? (
    user && (
      <main>
        <div>
          <h2>
            {user?.firstname} {user?.lastname} - ({user?.email})
          </h2>
        </div>
        <div>
          {reservedBooks.map((book) => {
            return (
              <div>
                <img
                  src={book.coverimage}
                  alt={`The cover of ${book?.title}`}
                />
                <p>{book.title}</p>
                <button
                  onClick={() => {
                    deleteBookReservations(token, book.id);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </main>
    )
  ) : (
    <Link to="/Login">Please login before viewing this page.</Link>
  );
}
