import { Row } from "react-bootstrap"
import BookCard from "./BookCard";

const BookList = (props) => {
    return (
             <div>
         <Row>
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
                
                 </Row>
        </div>
    )
}

export default BookList
