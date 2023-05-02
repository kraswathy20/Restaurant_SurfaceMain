import {React,useState,useEffect} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Restaurant() {
    // state to hold data from api

    var [restaurantList,setRestaurant]=useState([])
    // function to call api
        const fetchData=async()=>{
          const result=await fetch('/restaurants (1).json')
          result.json().then(
            data=>{
                setRestaurant(data.restaurants)
            }
          )
        }
    // console.log(restaurantList);
    // function call
        useEffect(()=>{
            fetchData()
        },[])

  return (
    <Row>
        {
            restaurantList.map(item=>(
               <Col className='p-5' lg={4} md={6} id='#cal'>
                    <Restcard restdata={item}></Restcard>
               </Col>
            ))
        }
    </Row>
  )
}

export default Restaurant