import React from 'react';
import BookCard from "./BookCard";

const BookList = (props) => {
    return (
        <div className="Container">
        <div className="list">
            {

                props.books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                    />


                })
            }
        </div>
        </div>
    )
}

export default BookList
