import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../API";
import { checkoutBook } from "../API";
import "../CSS/SingleBook.css";

/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

export default function SingleBook({ token }) {
  const [book, setBook] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      setBook(await getBookById(id));
      console.log(book);
    }

    async function handleCheckout(bookId) {
      await checkoutBook(token, bookId);
    }
    fetchBook();
  }, []);

  return (
    <main>
      <div className="single-book-card">
        <div className="single-book-image-container">
          <img
            className="single-book-image"
            src={book.coverimage}
            alt={`The cover of ${book.title}`}
          />
        </div>
        <p className="single-book-title">
          <b>{book.title}</b>
        </p>
        <p className="single-book-author">{book.author}</p>
        <p className="single-book-description">{book.description}</p>
        <p className="single-book-status">{`Available: ${book.available}`}</p>
        <button
          onClick={() => {
            checkoutBook(token, book.id);
          }}
        >
          Checkout
        </button>
      </div>
    </main>
  );
}
