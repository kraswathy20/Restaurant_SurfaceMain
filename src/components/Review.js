import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({restData}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
         <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
                restData.map(item=>(
                    <Card body style={{ width: '400px' }} className={'text-center'}>
                        <h6>Name :{item.name}</h6>
                        <p>Date :{item.date}</p>
                        <p>Rating :{item.rating}</p>
                        <p>Comments :{item.comments}</p>
                         </Card>
                ))
            }
           
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Review