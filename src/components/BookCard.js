import React from 'react'
import { CardGroup, Card } from "react-bootstrap"

const BookCard = (props) => {
    return (
        // <div className="">
        // <div className="col-sm-6"> 
          
        // <div className = "card" >
        //     <div className="card-body" >
                /* <div className="card-container"> */
                <CardGroup>
                  <Card>
                   
                        
                    <Card.Img className="book-img"variant="top" src={props.image} alt="book" />
                  <Card.Body>
                    {/* <div className="card-text"> */}
                    <Card.Title>Title:{props.title} </Card.Title>
                    <Card.Text>
                        <h3>Author:{props.author}</h3>
                        <h5>Published:{props.published}</h5>
                        </Card.Text>
                      
                        {/* </div> */}
                    </Card.Body>
                    
             </Card>
             </CardGroup>
             
    )
}

export default BookCard
