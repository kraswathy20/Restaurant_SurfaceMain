import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import './Restcard.css'
import Review from "./Review";
import OperatingTime from "./OperatingTime";
function RestView() {
  var [restaurants, setRestaurants] = useState([]);

  const fetchRest = async () => {
    const result = await fetch("/restaurants (1).json");
    result.json().then((data) => {
      setRestaurants(data.restaurants);
    });
  };
  const params = useParams();
  // variable is used here for storing since it is a portain of the data. if we want to store
  // the data from an api call then in that we must use  a state to store data
  // console.log(params.id);
  // console.log(restaurants);
  useEffect(() => {
    fetchRest();
  }, []);

  const allrestaurant = restaurants.find((item) => item.id == params.id);
  console.log(allrestaurant);
  return (
    <>
      {allrestaurant ? (
        <Row >
          <Col id="cal" lg={6} md={6} className="ms-5 mt-5 p-5 text-center" >
            <img
              src={allrestaurant.photograph}
              className="rounded border"
              style={{ height: "450px" }}
            ></img>
          </Col>

          <Col id="cal" className="me-5 mt-5 p-5 text-center" >
            <ListGroup as="ul">
              <ListGroup.Item as="li" active className="fs-2">
                {allrestaurant.name}
              </ListGroup.Item>
              <ListGroup.Item as="li">Neighbourhood:{allrestaurant.neighborhood} </ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Cuisine: {allrestaurant.cuisine_type}
              </ListGroup.Item>
              <ListGroup.Item as="li">Address: {allrestaurant.address} </ListGroup.Item>
              <ListGroup.Item as="li"> 
                 <div className="mt-3"><OperatingTime timeData={allrestaurant.operating_hours}/> </div>
                
              </ListGroup.Item>
              <ListGroup.Item as="li"> 
                
                 <div className="mt-3"><Review restData={allrestaurant.reviews}></Review> </div> 
              </ListGroup.Item>

              
            </ListGroup>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
}

export default RestView;
