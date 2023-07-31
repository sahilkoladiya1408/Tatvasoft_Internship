import BookCard from "../components/global/Book/BookCard";
import React from "react";

const data = [
  {
    title: "Book1",
    price: 300,
    author: "author1",
  },
  {
    title: "Book2",
    price: 400,
    author: "author2",
  },
  {
    title: "Book3",
    price: 200,
    author: "author3",
  },
];

const Book = () => {
  return (
    <div>
      {data.map((ele) => {
        return (
          <BookCard title={ele.title} price={ele.price} author={ele.author} />
        );
      })}
    </div>
  );
};

export default Book;
