/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../API";
import "../CSS/Books.css";

export default function Books() {
  const [librarysBooks, setLibrarysBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      setLibrarysBooks(await getBooks());
      await console.log(librarysBooks);
    }
    fetchBooks();
  }, []);

  return (
    <main className="books-library">
      {librarysBooks.map((book) => {
        return (
          <div key={book.id} className="book-card">
            <div className="books-image-container">
              <img
                className="books-image"
                src={book?.coverimage}
                alt={`The cover of ${book?.title}`}
              />
            </div>

            <p className="books-title">
              <Link to={`/book/${book.id}`}>
                <b>{book?.title}</b>
              </Link>
            </p>
            <p className="books-author">{book?.author}</p>
            <p className="books-description">{book?.description}</p>
            <span className="books-status">{`Available: ${book.available}`}</span>
          </div>
        );
      })}
    </main>
  );
}
