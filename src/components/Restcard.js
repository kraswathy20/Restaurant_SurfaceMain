import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Restcard({restdata}) {
  return (
    <>
      <Link to={`/View_Restaurant/${restdata.id}`} style={{textDecoration:'none',color:'white'}}>
      <Card id="cal" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={restdata.photograph} />
        <Card.Body>
          <Card.Title className="text-center">{restdata.name}</Card.Title>
          <Card.Text className="text-center">
            <p>
            <strong>Cuisine Type : </strong>
            {restdata.cuisine_type}
            </p>
          
            <p>
            <strong>Neighbour: </strong>
            {restdata.neighborhood}
            </p>
            
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </>
  );
}

export default Restcard;
