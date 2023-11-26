import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../API";
import { checkoutBook } from "../API";
import "../CSS/SingleBook.css";

export default function SingleBook({ token }) {
  const [book, setBook] = useState([]);
  const [number, setnumber] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      setBook(await getBookById(id));
    }
    fetchBook();
  }, [number]);

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
            if (token) {
              checkoutBook(token, book.id);
              setnumber(number + 1);
            } else {
              alert("You need to be signed in to do that.");
            }
          }}
        >
          Checkout
        </button>
      </div>
    </main>
  );
}
